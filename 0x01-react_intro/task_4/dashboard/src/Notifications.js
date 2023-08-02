import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

export default function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div class="Notifications">
      <button
        style={{ float: "right" }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img
          src={closeIcon}
          alt="closeicon"
          style={{ width: 20, height: 20 }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
