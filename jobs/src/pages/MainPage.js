import { useEffect, useState } from "react";
import jobsFetch from "../servises/jobsFetch";
import "./MainPage.css";
import SoloItem from "../components/mainPage/SoloItem";
const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    jobsFetch().then((response) => {
      setJobs(response);
    });
  }, []);
  return (
    <main className="main-page">
      <section className="main-page_wrapper">
        <div>
          {jobs.map((job) => {
            return <SoloItem key={job.id} info={job} />;
          })}
        </div>
        <div></div>
      </section>
    </main>
  );
};
export default MainPage;
