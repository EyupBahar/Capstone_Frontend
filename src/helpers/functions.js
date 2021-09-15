import axios from "axios";
import { LOGIN_URL, POSTS_URL, POST_URL, REGISTER_URL } from "./urls";


export const getPosts = async(setCurrentBlogs) => {
    try {
        const {data} = await axios.get(POSTS_URL)
        setCurrentBlogs(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    } 
}   
export const getPost = async(id, setPost) => {
    try {
        const {data} = await axios.get(POST_URL + id + "/")
        setPost(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}   
export const getLogin = async(body) => {
    try {
        const {data} = await axios.post(LOGIN_URL, body)
        console.log(data);
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }  
}
export const createUser = async(body) => {
    try {
        const {data} = await axios.post(POSTS_URL, body)
        console.log(data);
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }   
}
export const createPost = async(body) => {
    try {
        const {data} = await axios.post(REGISTER_URL, body)
        console.log(data);
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }  
}   