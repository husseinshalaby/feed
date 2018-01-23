import {
  GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAILURE,
} from '../Actions/Posts';

const INITIAL_STATE = {
  posts: [],
  post: {},
  loading: false,
  error: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    //Get all posts

    case GET_POSTS_LOADING:
      return {...currentState, loading: true};

    case GET_POSTS_SUCCESS:
      return {...currentState, loading: false, posts: action.posts};

    case GET_POSTS_FAILURE:
      return {...currentState, loading: false, error: action.error};

    default:
      return currentState;
  }
}
