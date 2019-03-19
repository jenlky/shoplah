import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

const ProfileLink = ({ user }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Button href="http://localhost:3000/user/profile" user={user} children='Profile' />
    );
  }

  return (
    <Button href="/user/profile" user={user} children='Profile' />
  );
};

const Logout = ({ purgeStore }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Button 
        href="http://localhost:8080/auth/logout" onClick={purgeStore} children='Logout'
      />
    );
  }

  return (
    <Button 
      href="/auth/logout" children='Logout' onClick={purgeStore} 
    />
  );
};

class LogoutMenu extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    //console.log(this.props.user);
    //const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {this.props.username}
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <ProfileLink />
                    <Logout purgeStore={this.props.purgeStore} />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
    
    /* 
    // remove dropdown-menu if nv use
    return (
      <div className='dropdown-menu'>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.props.user.username}
        </Button>
        <MenuList  
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Profile user={this.props.user} />
          <Logout purgeStore={this.props.purgeStore} />
        </MenuList>
      </div>
    ); */
  }
}

export default LogoutMenu;