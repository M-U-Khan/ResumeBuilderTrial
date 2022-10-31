import React from "react";

export default function Preview(props) {
  let details = props.userData;
  return (
    <div>
      <h1> Preview </h1>
      <div className="personal">
        <p> Name: {details.personal.name}</p>
      </div>

      <div className="contact">
        <p> Name: {details.personal.name}</p>
      </div>

      <div className="education">
        <p> Name: {details.personal.name}</p>
      </div>

      <div className="skills">
        <p> Name: {details.personal.name}</p>
      </div>

      <div className="traits">
        <p> Name: {details.personal.name}</p>
      </div>

      <p> contact education skills traits</p>
    </div>
  );
}
