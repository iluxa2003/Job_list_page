import { useEffect, useState } from "react";
import firstSvg from "../../images/Bookmark.svg";
import location from "../../images/Combined_Shape.svg";
import "./SoloItem.css";
const SoloItem = (props) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [posted, setPosted] = useState("");
  const [logo, setLogo] = useState("");
  const hora = new Date(posted);
  const today = new Date();
  useEffect(() => {
    const itemInfo = props.info;
    setDescription(itemInfo.description);
    setTitle(itemInfo.title);
    setName(itemInfo.name);
    setAddress(itemInfo.address);
    setPosted(itemInfo.updatedAt);
    setLogo(itemInfo.pictures[0]);
  }, [props]);

  return (
    <div className="solo-item__wrapper">
      <div>
        <figure className="solo-item__left-side">
          <img src={logo} className="solo-item__logo" />
          <figcaption>
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
          <img src={firstSvg} />
        </div>
        <div>
          {"Posted " +
            (today.getFullYear() - hora.getFullYear()) +
            " years ago"}
        </div>
      </div>
    </div>
  );
};

export default SoloItem;
