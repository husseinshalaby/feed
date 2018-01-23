import { connect } from 'react-redux';
import Posts from '../../Components/Posts';
import {
  getPostsLoading, getPosts, getPostsSuccess, getPostsFailure,
} from '../../Actions/Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (status) => {
          dispatch(getPostsLoading(status));
          setTimeout(() => {
              dispatch(getPosts(status)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getPostsSuccess(response.payload.data));
                  }else{
                      dispatch(getPostsFailure(response.payload.message));
                  }
              })
          }, 1000)
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
