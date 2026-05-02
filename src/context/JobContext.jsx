import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load saved jobs from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(data);
  }, []);

  // Save jobs to localStorage
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Add job (prevent duplicates)
  const addJob = (job) => {
    const exists = savedJobs.find((item) => item.id === job.id);
    if (!exists) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // Remove job
  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  return (
    <JobContext.Provider value={{ savedJobs, addJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
}