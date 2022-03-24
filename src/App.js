import classes from "./App.module.css";
import Wrapper from "./containers/Wrapper";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  function changeThemeHandler() {
    setTheme((prevState) => {
      if (prevState === "dark") return "light";
      else return "dark";
    });
  }
  const containerClasses = `${classes.container} ${
    theme === "light" ? classes.light : ""
  }`;
  return (
    <div className={containerClasses}>
      <Wrapper curTheme={theme} changeTheme={changeThemeHandler}></Wrapper>
    </div>
  );
}
export default App;
