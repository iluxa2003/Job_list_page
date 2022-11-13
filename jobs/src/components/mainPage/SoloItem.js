import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import firstSvg from "../../images/Bookmark.svg";
import location from "../../images/Combined_Shape.svg";
import star from "../../images/Star_Copy.svg";
import "./SoloItem.css";
const SoloItem = (props) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [posted, setPosted] = useState("");
  const [logo, setLogo] = useState("");
  const [id, setId] = useState("");
  const hora = new Date(posted);
  const today = new Date();
  useEffect(() => {
    const itemInfo = props.info;
    setTitle(itemInfo.title);
    setName(itemInfo.name);
    setAddress(itemInfo.address);
    setPosted(itemInfo.updatedAt);
    setLogo(itemInfo.pictures[0]);
    setId(itemInfo.id);
  }, [props]);

  return (
    <Link to={"/details/" + id} className="solo-item__wrapper">
      <div>
        <figure className="solo-item__left-side">
          <img src={logo} className="solo-item__logo" />
          <figcaption className="solo-item__figcaption">
            <div className="solo-item__top-text">{title}</div>
            <div>{name + " • " + address}</div>
            <div>
              <img src={location} />
              {" " + address}
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="solo-item__right-side">
        <div>
          <img className="solo-item__left-side-image" src={firstSvg} />
        </div>
        <div className="solo-item__mobile-top">
          <div className="solo-item__mobile-stars">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <div>
            {"Posted " +
              (today.getFullYear() - hora.getFullYear()) +
              " years ago"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SoloItem;
