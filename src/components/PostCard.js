import * as React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F3E6D3",
    
  },
  card: {
    width: 500,
    margin: theme.spacing(5),
    backgroundColor: "white",
    borderRadius: "10px",
    color: "black",
    transition: "0.3s",
    Width: 500,
    // margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    user: {
      paddingLeft: "0%",
      paddingTop: "56.25%",
    },
  },
  image: {
    // borderRadius: "50%",
    width: "auto",
    height: 220,
    padding: 10,
  },
}));

export default function PostCard({ post }) {
  const classes = useStyles();
  const history = useHistory();
  // const currentBlog= useContext(AuthContext);
  const handleDetails = (id) => {
    // if (!currentBlog?.currentBlog?.id) {
    //   alert("Please Login for Details!");
    // } else {
      history.push(`/details/${id}`);
    // }
  };
  
  return (
    <div>
      <Card onDoubleClick={() => handleDetails(post.id)} className={classes.card} sx={{ maxWidth: 100 }}>
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "56.25%",
          }}
          >
          <img className={classes.image} src={post.image} alt="card_media"/>    
        </CardMedia>
        <div style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}>
          {post.title}
        </div>
        <AccountCircleIcon
          className={classes.author}
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
          ></AccountCircleIcon>
          {post.author}
        <br />
        <CardContent>
          <Typography variant="body2" color="textSecondary"></Typography>
          {post.content}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon style={{ color: "#B0B4BC" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleIcon style={{ color: "#B0B4BC" }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
