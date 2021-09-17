import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostContainer from "../components/PostContainer";
import bakery from "../assets/bakery.png";

const useStyles = makeStyles((theme) => ({
  dashboard:{
    backgroundImage: `url(${bakery})`,
    // backgroundColor: "#bfefff",
    color: "#ACB4BA",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <PostContainer />
    </div>
  );
};

export default Dashboard;
