import * as actionTypes from './actions';

const FetchUser = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/auth/checkAuth', { credentials: 'include' })
      .then(res => {
        if (!res.ok) {
          throw Error();
        }
        return res;
      })
      .then(res => res.json())
      .then(res => dispatch({
        type: actionTypes.LOGIN_USER,
        payload: {...res, isLoggedIn: true }
      }))
      .then(console.log(this.state))
      .catch(error => dispatch({
        type: actionTypes.LOGOUT_USER,
        payload: {
          username: '',
          userID: '',
          thumbnail: '',
          isLoggedIn: false
        }
      }));
  }
}

export default FetchUser;