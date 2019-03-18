import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Login extends Component {
  render() {
    if (process.env.NODE_ENV === 'development') {
      return (
        <Button href="http://localhost:8080/auth/login" children='Login' />
      );
    }

    return (
      <Button href="/auth/login" children='Login' />
    );
  }
}

export default Login;