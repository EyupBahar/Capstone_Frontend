import axios from "axios";

const POSTS_URL = process.env.REACT_APP_MY_URL + "/postviewcreate/"

export const getPosts = async(setCurrentBlogs) => {
    try {
        const {data} = await axios.get(POSTS_URL)
        setCurrentBlogs(data)
    } catch (error) {
        console.error(error.response.data.detail ? error.response.data.detail : error.response.statusText)
    }
    
}   