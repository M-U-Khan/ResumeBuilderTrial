import React, { useState } from "react";

export default function Personal(props) {
  let [personal, setPersonal] = useState({ name: "", title: "" });
  let [contact, setContact] = useState({});

  // function to handle onChange
  function handlePersonal(event) {
    let id = event.target.id;
    let value = event.target.value;

    setPersonal((prev) => {
      if (id === "name") {
        return { title: prev.title, name: value };
      } else if (id === "title") {
        return { name: prev.name, title: value };
      }
    });
  }

  function handleContact(event) {
    let id = event.target.id;
    let value = event.target.value;

    setContact((prev) => {
      if (id === "name") {
        return { title: prev.title, name: value };
      } else if (id === "title") {
        return { name: prev.name, title: value };
      }
    });
  }

  //functions to handle onClick of button to submit user input
  function handleClick() {
    props.data(personal);
  }

  return (
    <div>
      <h3>Personal</h3>
      <input
        type="text"
        id="title"
        placeholder="Enter Title"
        value={personal.title}
        onChange={handlePersonal}
      />

      <input
        type="text"
        id="name"
        placeholder="Enter Name"
        value={personal.name}
        onChange={handlePersonal}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
