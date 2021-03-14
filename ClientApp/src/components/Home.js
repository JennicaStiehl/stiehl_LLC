import React, { useState } from "react";
import "../App.css";
import "fontsource-roboto";
import SideBar from "./SideBar";

export const Home = (props) => {
  const [linksVisible, setLinksVisible] = useState(false);
  const [linksState, setLinksState] = useState({
    links: [
      { url: "https://www.instagram.com/stiehl.dev/", name: "Instagram" },
      { url: "https://twitter.com/stiehldev", name: "Twitter" },
      { url: "mailto:jennica@stiehl.dev", name: "Email" },
    ],
  });
  // static displayName = Home.name;

  const toggleContactsHandler = () => {
    setLinksVisible(!linksVisible);
  };

  return (
    <div>
      <h1 className="app-title">Stiehl LLC</h1>
      <h2>Welcome</h2>
      <p>Thanks for landing here!</p>
      <button onClick={toggleContactsHandler}>Contact Info</button>
      {linksVisible ? (
        <div>
          <SideBar
            url={linksState.links[0].url}
            name={linksState.links[0].name}
            visible={linksVisible}
          />
          <SideBar
            url={linksState.links[1].url}
            name={linksState.links[1].name}
            visible={linksVisible}
          />
          <SideBar
            url={linksState.links[2].url}
            name={linksState.links[2].name}
            visible={linksVisible}
          />
        </div>
      ) : null}
    </div>
  );
};
