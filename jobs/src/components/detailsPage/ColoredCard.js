import { useEffect, useState } from "react";
import "./ColoredCard.css";
const ColoredCard = (props) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    setText(props.text);
    setColor(props.color);
  }, [props]);
  return <div className={"colored-card " + color}>{text}</div>;
};
export default ColoredCard;
