import Card from "../containers/Card";
import classes from "./Userinfo.module.css";
import { useEffect, useState } from "react";
import buildingImage from "../images/building.svg";
import twittericon from "../images/twitter-brands.svg";
import linkImg from "../images/link-solid.svg";
import locationImg from "../images/location-dot-solid.svg";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function UserInfo(props) {
  const obj = {
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    login: "octocat",
    bio: "This profile hs no bio...",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    blog: "https://github.blog",
    twitter_username: "Not available",
    company: "@github",
  };
  const [userData, setUserData] = useState(obj);
  const [error, setError] = useState(false);
  async function fetchData(username) {
    setError(false);
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      setError(true);
      return;
    }
    const data = await response.json();

    setUserData(data);
  }

  useEffect(() => {
    if (props.userName.trim() !== "") fetchData(props.userName);
  }, [props.userName]);

  let date, dateStr;
  if (userData.created_at) {
    date = new Date(userData.created_at);
    dateStr = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  }
  const userInfoClasses = `${props.theme === "light" ? classes.light : ""}`;
  if (error) {
    return (
      <Card className={props.theme}>
        <div className={userInfoClasses}>
          <p className={classes.error}>User not found!!!</p>
        </div>
      </Card>
    );
  }
  return (
    <Card className={props.theme}>
      <div className={userInfoClasses}>
        <div className={classes.row}>
          <div>
            <img
              src={userData.avatar_url}
              alt="avatar"
              className={classes.avatarImg}
            />
          </div>
          <div className={classes.info}>
            <div className={classes.row}>
              <div className={classes.username}>
                <p>{userData.name}</p>
                <p>@{userData.login}</p>
              </div>
              <p className={classes.joiningDate}>
                Joined <span>{dateStr ? dateStr : "25 Jan 2011"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.infoWrapper}>
          <p className={classes.bio}>
            {userData.bio ? userData.bio : "This profile has no bio..."}
          </p>
          <div className={classes.statRow}>
            <div>
              <p>Repos</p>
              <span>{userData.public_repos}</span>
            </div>
            <div>
              <p>Followers</p>
              <span>{userData.followers}</span>
            </div>
            <div>
              <p>Following</p>
              <span>{userData.following}</span>
            </div>
          </div>
          <div className={classes.miscInfo}>
            <div>
              <p>
                <img src={locationImg} alt="location icon" />
                <span>
                  {userData.location ? userData.location : "Not available"}
                </span>
              </p>
              <p>
                <img src={linkImg} alt="link icon" />
                <span>{userData.blog ? userData.blog : "Not available"}</span>
              </p>
            </div>
            <div>
              <p className={classes.twitter}>
                <img src={twittericon} alt="twitter icon" />
                <span>
                  {userData.twitter_username
                    ? userData.twitter_username
                    : "Not available"}
                </span>
              </p>
              <p>
                <img src={buildingImage} alt="workplace icon" />
                <span>
                  {userData.company ? userData.company : "Not available"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
export default UserInfo;
