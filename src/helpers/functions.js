import axios from "axios";
import { useHistory } from "react-router";
import { LOGIN_URL, POSTS_URL, POST_URL, REGISTER_URL, LOGOUT_URL } from "./urls";

export const getPosts = async(setCurrentBlogs) => {
    // console.log(setCurrentBlogs, "getPosts çalıştı")
    try {
        const {data} = await axios.get(POSTS_URL)
        setCurrentBlogs(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    } 
}
export const getPost = async(id, setPost) => {
    // console.log(setPost, "get post çalıştı");
    try {
        const {data} = await axios.get(POST_URL + id + "/")
        setPost(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}
export const getLogin = async(body,setCurrentUser) => {
    console.log(body,"get login çalıştı")
    try {
        const {data} = await axios.post(LOGIN_URL, body)
        console.log("datagetlogin", data);
        setCurrentUser(data)
        // history.push("/")
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
        console.log("getLogin hatalı")
    }
}
export const createUser = async(body, setCurrentUser) => {
    console.log(body,"user oluşturuldu")
    try {
        const {data} = await axios.post(REGISTER_URL, body)
        // console.log(data,"data");
        setCurrentUser(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}
export const createPost = async(body, history, setCurrentUser) => {
    try {
        const {data} = await axios.post(POSTS_URL, body)
        localStorage.setItem("currentuser", JSON.stringify(data))
        console.log("Post oluşturuldu",body)
        console.log(data);
        setCurrentUser(data)
        history.push("/");
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }  
}   
export const getLogout = async(token, setCurrentUser) => {
    // console.log(setPost, "get post çalıştı");
    try {
        const {data} = await axios.post(LOGOUT_URL, null, {
            headers: {
              Authorization: "Token " + JSON.parse(localStorage.getItem("userInfo")).token,
            },
          })
        setCurrentUser(data);
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}