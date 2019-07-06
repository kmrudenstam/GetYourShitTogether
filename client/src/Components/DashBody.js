import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Compstyles/Dashbodystyle.css";
import {Welcome} from "./DashWelcome";
import {Shit, ShitItem, DeleteBtn} from "./DashShit";
import API from "../utils/API";

class DashBody extends Component {

  state = {
    shit: [],
    item: "",
    importance: "",
    sentiment: "",
    usefulness: "",
    replaceable: "",
    danger: "",
    rating: "",
    journal: ""
  };

  componentDidMount() {
    console.log("Mounted");
    this.loadShit();
  };

  loadShit = () => {
    API.getShit()
      .then(res =>
        this.setState({ 
          shit: res.data, 
          item: "", 
          importance: "",
          sentiment: "",
          usefulness: "",
          replaceable: "",
          danger: "",
          rating: "",
          journal: "" })
      )
      .catch(err => console.log(err));
  };

  deleteShit = id => {
    API.deleteShit(id)
      .then(res => this.loadShit())
      .catch(err => console.log(err));
  };
 
  render () {
    return (
      <div className="container dashbody">
          <div className="row blankrow">
              <div className="col-12">
                  <div id="randomQuote"></div>
              </div>
          </div>
          <Welcome />
          <div className="row pastEntries">
            <div className="col-lg-6">
              <h3>The $#!T List</h3>
              <Shit>
                {this.state.shit.map(shit => (
                  <ShitItem key={shit._id}>
                    <strong>{shit.item}</strong>
                    <DeleteBtn onClick={() => this.deleteShit(shit._id)} />
                  </ShitItem>
                ))}
              </Shit>
            </div>
            <div className="col-lg-6">
              <h3>$#!T Talk</h3>
              <div className="shittalk">
                <p>Why is this happening now?<br />
                    Santa Brought me Corndogs<br />
                    Fuzzy Dice, I love you<br /></p>
              </div>
            </div>
          </div>
          <div id="footer" className="animated bounceInUp bounce">
          </div>
      </div>
    );
  }
};

export default DashBody;