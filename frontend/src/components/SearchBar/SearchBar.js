import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import useStyles from './styles';
import { axiosInstanceGet } from '../../helpers/ApiFunctions';
import ErrorMessage from '../ErrorMessage';

const SearchBar = () => {
  const classes = useStyles();
  const [redirectPlay, setRedirectPlay] = useState(false);
  const [playId, setPlayId] = useState(null);
  const [notExistError, setNotExistError] = useState(false);

  const onChange = (e) => {
    setNotExistError(false);
    setPlayId(e.target.value);
  };

  function playSet(e) {
    e.preventDefault();
    // checks that the user has only entered integer values in the search bar
    if (!/^\d+$/.test(playId)) {
      setNotExistError(true);
    } else {
      axiosInstanceGet()
        .head(`/sets/${playId}`)
        .then(() => {
          setRedirectPlay(true);
        })
        .catch((e) => {
          if (e.response.status === 404) {
            setNotExistError(true);
          }
        });
    }
  }

  return (
    <div className={classes.searchBox}>
      <form onSubmit={(e) => playSet(e)}>
        <Grid
          container
          spacing={1}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={10}>
            <TextField
              className={classes.search}
              type="text"
              variant="outlined"
              placeholder="Finn oppgavesett"
              margin="dense"
              fullWidth
              required
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              className={classes.btn}
            >
              Søk
            </Button>
          </Grid>
          {notExistError && (
            <>
              <Grid item xs={10}>
                <ErrorMessage message="Settet finnes ikke." />
              </Grid>
              <Grid item xs={2} />
            </>
          )}
        </Grid>
      </form>
      {redirectPlay && (
        <Redirect
          to={{
            pathname: '/sets',
            state: { id: playId },
          }}
        />
      )}
    </div>
  );
};
export default SearchBar;
