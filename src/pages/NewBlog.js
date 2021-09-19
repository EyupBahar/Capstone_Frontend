import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import blog from "../assets/blog.png";
import { AuthContext } from "../context/AuthContext";
import { createPost } from "../helpers/functions";

const useStyles = makeStyles((theme) => ({
  paper: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  img: {
    backgroundColor: "darkcyan",
    borderRadius: "50%",
    padding: "20px",
  },
  submit: {
    backgroundColor: "Darkcyan",
  },
}));

const NewBlog = () => {
  const { currentBlogs } = useContext(AuthContext);
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [content, setContent] = useState();
  const history = useHistory();

  const handleForSubmit = async(e) => {
    e.preventDefault();
    console.log(title,image,content)
    createPost({
      title,
      image,
      content,
    }, history);
    history.push("/");
  };

  return (
    <form
      className={classes.paper}
      noValidate
      autoComplete="off"
    >
      <img src={blog} alt="blog" className={classes.image} />
      <br />
      <TextField
        value={title}
        placeholder="Title"
        id="standard-basic"
        label="Title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        value={content}
        placeholder="Title"
        id="standard-basic"
        label="Content"
        variant="outlined"
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <TextField
        value={category}
        placeholder="Title"
        id="standard-basic"
        label="Category"
        variant="outlined"
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <Button
      variant="contained"
      component="label"
      color="secondary"
      >
      Upload File
      <input
        type="file"
        hidden
      />
      </Button>
      <br />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
        value="Login"
        onClick={handleForSubmit}
      >
        Add New Blog
      </Button>
    </form>
  );
};

export default NewBlog;
