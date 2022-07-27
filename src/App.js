import "./styles.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login.js";
import { useEffect } from "react";

import JobDetail from "./JobDetail";
import JOBS from './Jobs.js'
import { useState } from "react";
import Layout from "./Layout";


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
        <Route path="/jobs" element={<Layout allJobs={ allJobs }/>}/>
        <Route path="/job/:id" element={<JobDetail allJobs={ allJobs }/>} />
      </Routes>
    </div>
  );
}