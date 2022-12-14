import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core';
import Appbar from '@material-ui/core/AppBar';
import pickleLogo from '../../assets/images/pickleLogo.png';
import ellipse from '../../assets/images/ellipse.png';
import tree from '../../assets/images/tree.png';
import forest from '../../assets/images/forest.png';
import useStyles from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';

/**
 * The StartPage is the first page the user sees before logging in.
 * @author Phajsi
 * @returns The StartPage with links to the login and signup pages,
 * in addition to the DiPickle logo and the searchbar component.
 */
const StartPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar position="relative" className={classes.navbar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.right}>
            <Link to="/login" className={classes.title}>
              Logg inn
            </Link>
            <Link to="/signup" className={classes.title}>
              Registrer deg
            </Link>
          </Typography>
        </Toolbar>
      </Appbar>
      <img src={ellipse} alt="ellipse" className={classes.ellipse} />
      <div className={classes.logoBox}>
        <img src={pickleLogo} alt="pickle logo" className={classes.logoImg} />
        <Typography variant="h1" className={classes.logoText}>
          DiPICKLE
        </Typography>
      </div>
      <div className={classes.searchBar}>
        <SearchBar />
      </div>
      <img src={forest} alt="forest" className={classes.forest} />
      <img src={tree} alt="tree" className={classes.tree} />
    </div>
  );
};

export default StartPage;
