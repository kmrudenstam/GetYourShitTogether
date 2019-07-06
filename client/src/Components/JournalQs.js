import React, { Component } from "react";
// import logo from "../logo.svg";
import * as Survey from "survey-react";
Survey.Survey.cssType = "bootstrap";

const JournalQs = () => (
    
        <div>
            <form>
                        <div className="form-group">
                        <input className="form-control" type="text" placeholder="What do you want to talk about?"></input>
                            
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your journal entry here."></textarea>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
            </form>
            <div id="pastJournals"><h3>Past journal entries</h3></div>
        </div>
    
       

);

export default JournalQs;