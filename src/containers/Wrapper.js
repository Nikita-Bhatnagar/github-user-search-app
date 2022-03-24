import classes from "./wrapper.module.css";
import Header from "../UI components/Header";
import SearchBar from "../UI components/SearchBar";
import UserInfo from "../UI components/UserInfo";
import { useState } from "react";
function Wrapper(props) {
  const [userName, setUserName] = useState("");
  function sendUserInfo(username) {
    setUserName(username);
  }

  function sendThemeHandler() {
    props.changeTheme();
  }
  return (
    <div className={classes.wrapper}>
      <Header sendTheme={sendThemeHandler} theme={props.curTheme}></Header>
      <SearchBar sendUserName={sendUserInfo} theme={props.curTheme}></SearchBar>
      <UserInfo userName={userName} theme={props.curTheme}></UserInfo>
    </div>
  );
}
export default Wrapper;
