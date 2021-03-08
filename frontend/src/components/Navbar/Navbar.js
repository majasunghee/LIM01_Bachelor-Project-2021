import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AppBar, Box, Typography, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
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
  );

  return (
    <div>
      <Box component={AppBar} boxShadow={3} className={classes.root}>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.title}>
              Home
            </Link>
          </Typography>
          {isAuthenticated ? authLinks() : guestLinks()}
        </Toolbar>
      </Box>
      {redirect ? <Redirect to="/" /> : <div> </div>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
