import React, { Component } from "react";
import * as Survey from "survey-react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "survey-react/survey.css";
// import SurveyCreator from "./SurveyCreator";
import ItemQuestions from "./Components/ItemQuestions";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Description from "./Components/Description";
import DashBody from "./Components/DashBody";
import Nav from "./Components/Nav";
import JournalQs from "./Components/JournalQs";
import Detail from "./Components/Detail";
// import logo from "./logo_draft.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {

   render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      // Note: Router tags are wrapped around the App div
      <Router>
        <div className="App">
          <Nav />
          <Header />
          <Switch> {/* note from Robert: used Switch from react-dom-router so detail page can function properly, made some paths direct and made header and footer top-level */}
            <Route exact path="/dashboard" component={DashBody} />   
            <Route path="/Home" exact render={
              () => {
                return (
                  <div>
                    <h1>Welcome! Get Your <span role="img" alt="$#!T">💩</span> Together</h1>
                  </div>
                )
              }
            } />
            <Route exact path="/" component={Description} />
            <Route path="/add-shit" exact render={
              ()=> {
                return (
                <div className="itemQuestDiv">
                  <h1 className="surveyTitle">Add Your $#!T</h1>
                  <p className="questInstructions">Just fill out this quick form to add an item you want to get rid of. </p> 
                  <ItemQuestions />
                  <div id="yourScore"></div>
                </div>
              )
            }
          }/>
            <Route exact path="/journal" component={JournalQs}/>
            <Route exact path="/shit/:id" component={Detail}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;