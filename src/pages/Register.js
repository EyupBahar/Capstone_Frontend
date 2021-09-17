import React, { useContext, useState } from "react";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createUser } from "../helpers/functions";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: "5px",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  Button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor : "#008080",
    
  },
}));

// const handleProvider = () => {
//   SignUpProvider();
  // history.push("/");
// };
export default function Register() {

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setCurrentUser } = useContext(AuthContext);

  const handleRegister = () => {
    createUser({username, email, password}, setCurrentUser);
    console.log((username, email, password, setCurrentUser), "Registerdan gelen")
  };

  return (    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <SaveOutlinedIcon className={classes.avatar}>
          <LockOutlinedIcon />
        </SaveOutlinedIcon>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            type="username"
            id="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.Button}
            fullWidth
            variant="contained"
            value="register"
            onClick={handleRegister}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
