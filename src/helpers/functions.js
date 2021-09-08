import axios from "axios";

const POSTS_URL = process.env.REACT_APP_MY_URL + "/postviewcreate/"

export const getPosts = async(setCurrentBlogs) => {
    try {
        const {data} = await axios.get(POSTS_URL)
        setCurrentBlogs(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }
    
}   
const POST_URL = process.env.REACT_APP_MY_URL + "/postdetail/"

export const getPost = async(id, setPost) => {
    try {
        const {data} = await axios.get(POST_URL + id + "/")
        setPost(data)
    } catch (error) {
        console.error(error.response.data.detail? error.response.data.detail: error.response.statusText)
    }
    
}   