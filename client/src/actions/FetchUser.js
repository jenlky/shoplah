import * as actionTypes from './actions';

const FetchUser = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/auth/checkAuth', { credentials: 'include' })
      .then(res => {
        try {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
        } catch(err) {
          console.log(err);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => dispatch({
        type: actionTypes.LOGIN_USER,
        payload: {...res, isLoggedIn: true }
      }))
      .catch(error => {
        console.log(error);
        dispatch({
          type: actionTypes.LOGOUT_USER,
          payload: {
            username: '',
            userID: '',
            thumbnail: '',
            isLoggedIn: false
          }
        })
      });
  }
}

export default FetchUser;