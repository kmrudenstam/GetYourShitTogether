import React from "react";

import "./Compstyles/Headerstyle.css";

const Header = () => (
    <div className="logo">
        <img src={require('../logo.png')} width="200" height="200" />
    </div>
);

export default Header;