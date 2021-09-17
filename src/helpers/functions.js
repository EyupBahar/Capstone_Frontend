import axios from "axios";
import { LOGIN_URL, POSTS_URL, POST_URL, REGISTER_URL } from "./urls";


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
export const getLogin = async(body) => {
    console.log(body,"get login çalıştı")
    try {
        const {data} = await axios.post(LOGIN_URL, body)
        console.log("datagetlogin", data);
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }  
}
export const createUser = async(body, setCurrentUser) => {
    console.log(body,"user oluşturuldu")
    try {
        const {data} = await axios.post(REGISTER_URL, body)
        console.log(data,"data");
        setCurrentUser(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}
export const createPost = async(body, history, setCurrentUser) => {
    console.log("Post oluşturuldu",body)
    try {
        const {data} = await axios.post(POSTS_URL, body)
        console.log(data);
        setCurrentUser(data)
        history.push("/");
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }  
}   