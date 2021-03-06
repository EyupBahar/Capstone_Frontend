import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HomeIcon from "@material-ui/icons/Home";
import { getLogout } from "../helpers/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 15,
    fontSize: 30,
    fontWeight: "bolder", 
  },
  AppBar: {
    backgroundColor: "#008080",
  },
  item: {
    marginTop: theme.spacing(8),
  },
}));

export default function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = (token) => {
    getLogout(token);
    currentUser.token()
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setCurrentUser();
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            // edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <HomeIcon />
            {/* <SvgIcon className="svg" /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <code> JoKeR Design</code>
          </Typography>
          { currentUser?.username ? <div> <p> Wellcome {currentUser.username} </p> </div> : undefined }
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <div>
            {currentUser?.username ? (
              <Menu
                className={classes.item}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => history.push("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => history.push("/newBlog")}>
                  New
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            ) : (
              <Menu
                className={classes.item}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => history.push("/login")}>
                  Login
                </MenuItem>
                <MenuItem onClick={() => history.push("/register")}>
                  Register
                </MenuItem>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
