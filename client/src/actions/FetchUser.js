import * as actionTypes from './actions';

const FetchUser = () => {
  return (dispatch) => {
    // fetch from server port - http://localhost:8080/auth/checkAuth
    fetch('/auth/checkAuth', { credentials: 'include' })
      .then(res => {
        try {
          if (!res.ok) {
            throw new Error(res.statusText);
          } 
          
          return res;
        } catch(err) {
          console.log(err);
        }
      })
      .then(res => res.json())
      .then(res => dispatch({
        type: actionTypes.LOGIN_USER,
        payload: { ...res, isLoggedIn: true }
      }))
      .catch(error => {
        console.log(error);
        dispatch({
          type: actionTypes.LOGOUT_USER,
          payload: {
            user: '',
            userID: '',
            picture: '',
            isLoggedIn: false
          }
        })
      });
  }
}

export default FetchUser;