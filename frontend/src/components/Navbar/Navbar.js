import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import logo from '../../assets/images/logoWithText.png';
import useStyles from './styles';

const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logoutUser = () => {
    logout();
    setRedirect(true);
  };

  const classes = useStyles();

  const guestLinks = () => (
    <Typography variant="h6" className={classes.right}>
      <Link to="/login" className={classes.title}>
        Logg inn
      </Link>
      <Link to="/signup" className={classes.title}>
        Registrering
      </Link>
    </Typography>
  );

  const authLinks = () => (
    <>
      <Typography variant="h6" className={classes.right}>
        <Link to="/createexercise" className={classes.title}>
          Opprett oppgavesett
        </Link>
      </Typography>
      <Typography
        variant="h6"
        className={classes.right}
        href="#!"
        onClick={logoutUser}
      >
        <Link to="/" className={classes.title}>
          Logg ut
        </Link>
      </Typography>
    </>
  );

  return (
    <div>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          {isAuthenticated ? authLinks() : guestLinks()}
        </Toolbar>
      </AppBar>
      {redirect ? <Redirect to="/" /> : <> </>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
