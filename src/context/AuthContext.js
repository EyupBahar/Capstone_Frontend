import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { getPosts } from "../helpers/functions";


export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
  displayName:"",
  email:"",
  date:"",
  uid:""
  })



  useEffect(() => {
    // getPosts()
    console.log(getPosts())
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
