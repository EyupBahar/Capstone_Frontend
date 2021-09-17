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
  
  const [currentUser, setCurrentUser] = useState({
  
  })
  
  useEffect(() => {
    getPosts(setCurrentBlogs) 
  }, []);

  return (
    <AuthContext.Provider value={{ currentBlogs, setCurrentUser, currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
