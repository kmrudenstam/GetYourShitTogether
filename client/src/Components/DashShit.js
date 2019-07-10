import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Compstyles/Dashbodystyle.css";

export function Shit ({children}) {
  return(
    <div className="shitlist list-overflow-container">
    <ul className="list-group">{children}</ul>
    </div>
  )
}

export function ShitItem ({children}) {
  return (
  <li className="list-group-item" >{children}</li>)
}
