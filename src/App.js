import "./styles.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login.js";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import { useEffect } from "react";

import JOBS from './Jobs.js'
import { useState } from "react";


export default function App() {
  const navigate = useNavigate();

  const[allJobs, setAllJobs] = useState(JOBS)
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    if (loggedIn) {
      navigate('/jobs');
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/jobs" element={<JobBoard />}/>
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}