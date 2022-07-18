import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";

import JOBS from './Jobs.js'
import { useState } from "react";


export default function App() {

  const[allJobs, setAllJobs] = useState(JOBS)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}