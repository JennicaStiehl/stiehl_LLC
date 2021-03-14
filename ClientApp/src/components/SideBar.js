import React, { Component } from "react";
import "../App.css";

const SideBar = (props) => {
  return (
    <div>
      <li hidden={props.hidden}>
        <a href={props.url}>{props.name}</a>
      </li>
    </div>
  );
};
export default SideBar;
