import { useEffect, useState } from "react";
import jobsFetch from "../servises/jobsFetch";
import "./MainPage.css";
const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    jobsFetch().then((response) => {
      setJobs(response);
    });
  }, []);
  return (
    <div className="main-page_wrapper">
      <div>
        {jobs.map((job) => {
          return <div key={job.id}>{job.name}</div>;
        })}
      </div>
      <div></div>
    </div>
  );
};
export default MainPage;
