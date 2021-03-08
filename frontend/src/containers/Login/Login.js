import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#3f51b5',
    flexDirection: 'column',
    padding: theme.spacing(3),
    fontFamily: 'roboto, helvetica, arial, sansSerif',
  },
  infoBox: {
    marginTop: theme.spacing(3),
    margin: 'auto',
    padding: theme.spacing(3),
    width: '60vh',
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 0,
  },
  secondaryButton: {
    margin: theme.spacing(1),
    marginLeft: 0,
    backgroundColor: 'gray',
    color: 'white',
  },
  headline: {
    textAlign: 'center',
  },
  divider: {
    margin: theme.spacing(3),
  },
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.infoBox}>
        <h1 className={classes.headline}>Logg inn</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <TextField
            type="email"
            placeholder="Epost"
            name="email"
            variant="outlined"
            value={email}
            onChange={(e) => onChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            required
            fullWidth
          />
          <TextField
            type={showPassword ? 'text' : 'password'}
            placeholder="Passord"
            name="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => onChange(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            minLength="6"
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            className={classes.button}
          >
            Logg inn
          </Button>
        </form>
        <hr className={classes.divider} />
        <Grid container>
          <Grid item xs={6}>
            <p> Har du ikke en konto? </p>
          </Grid>
          <Grid item xs={6}>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              fullWidth
              size="small"
              className={classes.secondaryButton}
            >
              Registrering
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <p> Glemt passordet? </p>
          </Grid>
          <Grid item xs={6}>
            <Button
              component={Link}
              to="/reset-password"
              variant="contained"
              fullWidth
              size="small"
              className={classes.secondaryButton}
            >
              Bytt passord
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);