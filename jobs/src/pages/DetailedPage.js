import "./DetailedPage.css";
import location from "../images/Combined_Shape.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsFetch from "../servises/jobsFetch";
import bookmark from "../images/Bookmark.svg";
import share from "../images/Share.svg";
import ColoredCard from "../components/detailsPage/ColoredCard";
import star from "../images/Star.png";
const DetailedPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [posted, setPosted] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const hora = new Date(posted);
  const today = new Date();

  useEffect(() => {
    jobsFetch().then((response) => {
      if (response !== String) {
        response.map((item) => {
          return item.id === id ? setInfo(item) : 0;
        });
      }
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
      setEmploymentType(info.employment_type);
      setAddress(info.address);
      setName(info.name);
      setTel(info.phone);
      setEmail(info.email);
    }
  }, [info]);
  return (
    <div className="detailed-page">
      <div className="detailed-page__wrapper">
        <header className="detailed-page__header ">
          <div className="detailed-page__header-left">Job Details</div>
          <div className="detailed-page__header-right detailed-page__mobile-disapear">
            <figure className="detailed-page__header-figure">
              <img src={bookmark} alt="ooops, something went wrong" />
              <figcaption className="detailed-page__header-figcaption">
                Save to my list
              </figcaption>
            </figure>
            <figure className="detailed-page__header-figure ">
              <img src={share} alt="ooops, something went wrong" />
              <figcaption className="detailed-page__header-figcaption">
                Share
              </figcaption>
            </figure>
          </div>
        </header>
        <main>
          <div className="detailed-page__mobile-header-addition">
            <figure className="detailed-page__header-figure">
              <img src={star} alt="ooops, something went wrong" />
              <figcaption className="detailed-page__header-figcaption">
                Save to my list
              </figcaption>
            </figure>
            <figure className="detailed-page__header-figure ">
              <img src={share} alt="ooops, something went wrong" />
              <figcaption className="detailed-page__header-figcaption">
                Share
              </figcaption>
            </figure>
          </div>

          <button className="detailed-page__apply-button detailed-page__mobile-disapear">
            APPLY NOW
          </button>
          <section className="detailed-page__title">
            <h2>{title}</h2>
            <div>
              {"Posted " +
                (today.getFullYear() - hora.getFullYear()) +
                " years ago"}
            </div>

            <div>
              <h3>{"$ " + price}</h3>
              <div> Dollars per year</div>
            </div>
          </section>
          <section className="detailed-page__main-info">
            <h3>Responsobilities</h3>
            <div className="detailed-page__main-text detailed-page__mobile-text">
              {description}
            </div>
          </section>
          <section className="detailed-page__main-info">
            <h3>Benefits</h3>
            <ul className="detailed-page__benefits">
              {benefits.map((benefit) => {
                return (
                  <li
                    className="detailed-page__main-text detailed-page__mobile-text"
                    key={Math.random()}
                  >
                    {benefit}
                  </li>
                );
              })}
            </ul>
            <button className="detailed-page__apply-button">APPLY NOW</button>
          </section>
          <section>
            <h2 className="detailed-page__underlined-text">Additional info</h2>
            <h3>Employment type</h3>
            <ul className="detailed-page__list">
              {employmentType.map((item) => {
                return (
                  <li key={Math.random()}>
                    <ColoredCard text={item} color={"blue"} />
                  </li>
                );
              })}
            </ul>
            <h3>Benefits</h3>
            <ul className="detailed-page__list">
              {benefits.map((item) => {
                return (
                  <li key={Math.random()}>
                    <ColoredCard text={item} color={"yellow"} />
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <h2 className="detailed-page__underlined-text">Attached Images</h2>
            <div className="detailed-page__images-wrapper">
              {pictures.map((image) => {
                return (
                  <img
                    src={image}
                    className="detailed-page__images"
                    key={Math.random()}
                    alt="ooops, something went wrong"
                  />
                );
              })}
            </div>
          </section>
        </main>
        <footer>
          <h2 className="detailed-page__underlined-text">Contacts</h2>
          <div className="detailed-page__footer">
            <div>{name}</div>
            <div>
              <img src={location} alt="ooops, something went wrong" />
              {" " + address}
            </div>
            <div>{tel}</div>
            <div>{email}</div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default DetailedPage;
