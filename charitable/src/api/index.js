import axios from 'axios';

const url = 'http://localhost:5000/api/donate';

const id = localStorage.getItem('id')


export const fetchPosts = () => axios.get(url);


export const createPost = (newPost) => axios.post(url, newPost);


export const updatePost = (id, updatedPost) => axios.post(`${url}/${id}`, updatedPost);
