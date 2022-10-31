import { React, useState } from "react";
import "./styles.css";
import UserData, { userData } from "./data.js";
import Preview from "../Components/Preview/Preview";
import Editor from "../Components/Editor/Editor";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Main Component
export default function App() {
  // Handling user data
  let [personal, setPersonal] = useState({ name: "", title: "" });
  let [contact, setContact] = useState("placeholder");
  let [education, setEducation] = useState("placeholder");
  let [skills, setSkills] = useState("placeholder");
  let [traits, setTraits] = useState("placeholder");
  let [experience, setExperience] = useState("placeholder");

  // functions for fetching data from each form
  function fetchPersonal(data) {
    console.log("from app", data);
    setPersonal({ name: data.name, title: data.title });
  }

  let data = new UserData(
    personal,
    contact,
    education,
    skills,
    traits,
    experience
  );

  return (
    <div className="App">
      <Router>
        <Editor personal={fetchPersonal} />
      </Router>
      <Preview userData={data} />
    </div>
  );
}
