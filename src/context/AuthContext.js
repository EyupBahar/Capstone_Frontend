import { createContext, useState, useEffect, useContext } from "react";
import { getPosts } from "../helpers/functions";

export const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  const [currentBlogs, setCurrentBlogs] = useState([{
  id:"",
  title:"",
  author:"",
  content:"",
  image:""
  }])

  useEffect(() => {
    getPosts(setCurrentBlogs)
  }, []);
  // console.log(getPosts())
  console.log(currentBlogs, "auth");

  return (
    <AuthContext.Provider value={{ currentBlogs }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
