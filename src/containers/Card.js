import classes from "./Card.module.css";
function Card(props) {
  const cardClasses = `${classes.card} ${
    props.className === "light" ? classes.light : ""
  }`;
  return <div className={cardClasses}>{props.children}</div>;
}
export default Card;
