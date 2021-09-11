import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PostCard from "./PostCard";
// import loading from "../assets/loading.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1), 
  },
  blogContainer: {
    marginLeft: 170,
    display: "flex",
    flexWrap: "wrap",
  },
  image: {
    marginLeft: "30%",
  },
}));

const PostContainer = () => {
  const { currentBlogs } = useContext(AuthContext);
  // console.log("pcontainers")
  // const { blogList, isLoading } = useFetch();
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ color: "#26655f" }}> DASHBOARD </h1>
      <div className={classes.blogContainer}>
            {currentBlogs?.map((item, index) => (
              <PostCard   post={item} key={index} />
            ))}
      </div>  
    </div>
  );
};

export default PostContainer;
