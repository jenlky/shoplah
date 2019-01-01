import { Component } from 'react';

class CheckAuth extends Component {
  componentDidMount() {
    fetch( '/auth/checkAuth', { credentials: 'include' } )
      .then( res => res.json() )
      .then( res => console.log( res ) ) 
      .catch( err => console.log( err ) );
  }

  render() {
    return null;
  }
}

export default CheckAuth;