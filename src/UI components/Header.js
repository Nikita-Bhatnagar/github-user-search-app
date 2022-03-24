import classes from "./Header.module.css";
import sun from "../images/sun-8727.svg";
import moon from "../images/moonIcon.svg";
function Header(props) {
  const headerClasses = `${classes.header} ${
    props.theme === "light" ? classes.light : ""
  }`;
  return (
    <div className={headerClasses}>
      <h1>devfinder</h1>
      <div className={classes.theme} onClick={props.sendTheme}>
        <span>{props.theme === "light" ? "DARK" : "LIGHT"}</span>
        <img
          src={props.theme === "light" ? moon : sun}
          alt={props.theme === "light" ? "light" : "dark"}
        />
      </div>
    </div>
  );
}
export default Header;
