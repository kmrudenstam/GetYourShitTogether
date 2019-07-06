import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Compstyles/Dashbodystyle.css";

export function Welcome() {
  return (
    <div className="row">
      <div className="col-lg-6">
          <h1 className="dashHeader">Welcome! (UserName)!</h1>
          <h3><a href="/add-shit">Get rid of your $#!T</a></h3>
          <p>Are you ready to ditch the crap that's taking over your life? Here you can add items that you're thinking of getting rid of and we'll help you prioritize the one's you should throw away now. </p>
          <h3><a href="/journal">Talk about your $#!T</a></h3>
          <p>Sometimes we develop an unhealthy attachment to material things. Explore the thoughts and feeling that are making you cling to stuff you don't really need. </p>
      </div>
      <div className="col-lg-6">
          <div id="randomGif"></div>

      </div>
    </div>
  );
}