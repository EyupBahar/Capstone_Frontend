import axios from "axios";

const POSTS_URL = process.env.REACT_APP_MY_URL + "/postviewcreate/"

export const getPosts = async() => {
    const allPost = await axios.get(POSTS_URL)
    return allPost
}