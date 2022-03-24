import classes from "./Searchbar.module.css";
import { useRef } from "react";
import searchIcon from "../images/magnifying-glass-solid.svg";
import Card from "../containers/Card";

function SearchBar(props) {
  const userNameRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    if (userNameRef.current.value.trim() === "") return;
    props.sendUserName(userNameRef.current.value);
    userNameRef.current.value = "";
  }

  return (
    <Card className={props.theme}>
      <img className={classes.searchicon} src={searchIcon} alt="searchIcon" />
      <form onSubmit={submitHandler}>
        <input
          type="search"
          placeholder="Search Github username..."
          ref={userNameRef}
        />
        <button type="submit">Search</button>
      </form>
    </Card>
  );
}
export default SearchBar;
