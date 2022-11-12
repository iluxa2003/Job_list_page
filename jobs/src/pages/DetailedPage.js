import "./DetailedPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsFetch from "../servises/jobsFetch";
import bookmark from "../images/Bookmark.svg";
import share from "../images/Share.svg";
const DetailedPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [posted, setPosted] = useState("");
  const [benefits, setBenefits] = useState([]);
  const hora = new Date(posted);
  const today = new Date();
  useEffect(() => {
    jobsFetch().then((response) => {
      response.map((item) => {
        return item.id === id ? setInfo(item) : 0;
      });
    });
  }, [id]);
  useEffect(() => {
    if (info.length !== 0) {
      setPictures(info.pictures);
      setTitle(info.title);
      setPrice(info.salary);
      setDescription(info.description);
      setPosted(info.updatedAt);
      setBenefits(info.benefits);
    }
  }, [info]);
  return (
    <div className="detailed-page">
      <div className="detailed-page__wrapper">
        <header className="detailed-page__header">
          <div className="detailed-page__header-left">Job Details</div>
          <div className="detailed-page__header-right">
            <figure className="detailed-page__header-figure">
              <img src={bookmark} />
              <figcaption>Save to my list</figcaption>
            </figure>
            <figure className="detailed-page__header-figure">
              <img src={share} />
              <figcaption>Share</figcaption>
            </figure>
          </div>
        </header>
        <main>
          <button className="detailed-page__apply-button">APPLY NOW</button>
          <section className="detailed-page__title">
            <div>
              <h2>{title}</h2>
              <div>
                {"Posted " +
                  (today.getFullYear() - hora.getFullYear()) +
                  " years ago"}
              </div>
            </div>
            <div>
              <h3>{"$ " + price}</h3>
              <div> Dollars per year</div>
            </div>
          </section>
          <section className="detailed-page__main-info">
            <h3>Responsobilities</h3>
            <div>{description}</div>
          </section>
          <section className="detailed-page__main-info">
            <h3>Benefits</h3>
            <ul>
              {benefits.map((benefit) => {
                return <li key={Math.random()}>{benefit}</li>;
              })}
            </ul>
            <button className="detailed-page__apply-button">APPLY NOW</button>
          </section>
          <section>
            <div>Attached Images</div>
            <div>
              {pictures.map((image) => {
                return <img src={image} key={Math.random()} alt="" />;
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default DetailedPage;
