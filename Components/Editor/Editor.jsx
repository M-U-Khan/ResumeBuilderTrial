import React, { useState } from "react";
import Personal from "./Personal";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./Skills";

export default function Editor(props) {
  return (
    <>
      <h1> Editor </h1>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Peronal</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Education</Link>
          </li>
          <li>
            {" "}
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Traits</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Experience</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Personal data={props.personal} />} />
        <Route path="/Skills" element={<Skills />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}
