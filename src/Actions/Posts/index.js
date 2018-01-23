import Axios from 'axios';

// Action Types

// Get all posts

export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

//Action Creators

//Get all posts
export const getPostsLoading = () =>{
  return{
    type: GET_POSTS_LOADING
  }
}
export const getPosts = () => {
  const payload = Axios.get( 'https://jsonplaceholder.typicode.com/posts');
  return {
    type: GET_POSTS,
    payload
  }
}
export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts
  }
}
export const getPostsFailure = (error) => {
  return {
    type:  GET_POSTS_FAILURE,
    error
  }
}
