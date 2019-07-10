import React, { Component } from "react";
// import logo from "../logo.svg";
import API from "../utils/API";
import * as Survey from "survey-react";
import Moment from "react-moment";
Survey.Survey.cssType = "bootstrap";

class JournalQs extends Component {

  state = {
    journal: [],
    title: "",
    entry: "",
  };

  componentDidMount() {
    this.loadJournal();
  }

  loadJournal = () => {
    API.getJournals()
      .then(res => 
        this.setState({
          journal: res.data,
          title: "",
          entry: ""
        }))
      .catch(err => console.log(err));
  };

  deleteJournal = id => {
    API.deleteJournal(id)
      .then(res => this.loadJournal())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.entry) {
      API.saveJournal({
        title: this.state.title,
        entry: this.state.entry
      })
        .then(res => this.loadJournal())
        .catch(err => console.log(err));
    }
  };
  
  render() {
  return (
  <div className="journalDiv"><h1>Talk About Your $#!T</h1>       
    <form>
      <div className="form-group">
      <input 
        className="form-control" 
        type="text"
        name="title" 
        placeholder="What do you want to talk about?"
        value={this.state.title}
        onChange={this.handleInputChange}                         
      />
          
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            name="entry"
            rows="3" 
            placeholder="Type your journal entry here." 
            value={this.state.entry}
            onChange={this.handleInputChange}
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={!this.state.title && this.state.entry}
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
      </div>
    </form>
    <div id="pastJournals">
      <h3>Past journal entries</h3>
      <hr />
      {!this.state.journal.length ? (
        <h4>You haven't said $#!T</h4>
      ) : (
        <div>
        {this.state.journal.map(journal => (
          <div key={journal._id}>
            <h4>Title: {journal.title}</h4>
            <p>Date: 
              <Moment format="MM/DD/YYYY">
                {journal.date}
              </Moment>
            </p>
            <p>Entry: {journal.entry}</p>
            <button
              type="delete"
              title="Delete $#!T"
              onClick={() => this.deleteJournal(journal._id)}
            >
              <span role="img" alt="X" aria-label="poo">💩</span>
            </button>
            <hr />
          </div>
        ))}
        </div>
      )}
    </div>
    <div style={{height: 100}}></div>
  </div>

)};

}

export default JournalQs;