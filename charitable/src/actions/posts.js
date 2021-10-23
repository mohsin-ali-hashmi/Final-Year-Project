import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
import {toastMessage} from '../components/helper/Toatify'
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
   
    

    dispatch({ type: CREATE, payload: data });

    toastMessage(`Post is created thank you`,'success');
     
  } catch (error) {
    
    toastMessage(`Enter All Fields or Enter correct data`, "error")
 
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const email=localStorage.getItem('userEmail')
    post.email=email
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getNotification = (id, post) => async (dispatch) => {
  try {
    const email=localStorage.getItem('userEmail')
    post.email=email
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

