// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
// import logo from "../logo.svg";
import * as Survey from "survey-react";
import API from "../utils/API"


export class ItemQuestions extends Component  {
 //Define Survey JSON
 json = {
    "pages": [
      {
         "name": "page1",
         "elements": [
          {
           "type": "text",
           "name": "itemname",
           "title": "What item would you like to get rid of? "
          },
          {
           "type": "rating",
           "name": "question1",
           "title": "How important is this item to you? 1 = A lot. 5 = Not very much."
          },
          {
           "type": "rating",
           "name": "question2",
           "title": "If this item were lost/stolen, how much would you miss it? 1 = A lot! 5 = Not at all."
          },
          {
           "type": "rating",
           "name": "question3",
           "title": "How often do you use this item? 1 = Every day! 3= Occationally. 5=I haven't use it in years."
          },
          {
           "type": "rating",
           "name": "question5",
           "title": "How easily could this item be replaced? 1. It's one of a kind. 5=I could got another one immediately.  "
          },
          {
           "type": "rating",
           "name": "question6",
           "title": "Do you think this item is hurting your health? 1 = Not at all.  5 = Yes, definitely! "
          },
          {
           "type": "comment",
           "name": "question7",
           "title": "How do you think you'll feel when you've finally gotten rid of it?"
          }
         ]
        }
    ],
    "showCompletedPage": false
   }


   
  
   //Define a callback methods on survey complete
   onComplete(survey) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    console.log((survey.data)); //lets play with this to see how we can choose just the integer itself
    
    //This counts the number of questions

    var q1 = parseInt(survey.data.question1);
    var q2 = parseInt(survey.data.question2);
    var q3 = parseInt(survey.data.question3);
    var q5 = parseInt(survey.data.question5);
    var q6 = parseInt(survey.data.question6);
    console.log("Answers to questions: " + q1, q2, q3, q5, q6);

    var totalOfQuestionScores = q1 + q2 + q3 + q5 + q6;
    var averageOfQuestions = totalOfQuestionScores / 5;
    console.log("Average" + averageOfQuestions);

    document.getElementById("yourScore").innerHTML = "<p class='ratingaverage'>Your score for <strong>" + survey.data.itemname + "</strong> is " + averageOfQuestions +"</h3>";

    API.saveShit({
      item: survey.data.itemname,
      importance: q1,
      sentiment: q2,
      usefulness: q3,
      replaceable: q5,
      danger: q6,
      journal: survey.data.question7,
      rating: averageOfQuestions
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

   }
   render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return (
      <div>
    <Survey.Survey model={model} onComplete={this.onComplete}/>
    <div style={{height: "10rem"}}></div>
    </div>
    );
    /*
    //The alternative way. react Survey component will create survey model internally
    return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
    */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or 
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function. 
    //If needed react Survey Component will change its behavior and change UI.
   }
}

export default ItemQuestions;