import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import sadPickle from '../../assets/images/sadPickle.png';
import mariusPickle from '../../assets/images/mariusPickle.png';

/**
 * This is the feedback page between exercises.
 * @author Julie
 * @param {object} props
 * @property {integer} totalScore Keeps track of the players total score.
 * @property {integer} totalExercises Total number of exercises in a set.
 * @property {boolean} feedbackState True if the player answered correctly, false if not.
 * @property {function} nextExercise Button that takes the player to the next exercise.
 * @returns A feedback page.
 */
const Feedback = ({
  totalScore,
  totalExercises,
  feedbackState,
  nextExercise,
}) => {
  const classes = useStyles();
  // Returns a different feedback page if the player succeeded or not.
  switch (feedbackState) {
    case true:
      return (
        <Paper elevation={0} className={classes.root}>
          <img
            src={mariusPickle}
            alt="Marius pickle"
            className={classes.image}
          />
          <div className={classes.textBox}>
            <Typography variant="h1" className={classes.text}>
              Hurra, du klarte det!
            </Typography>
            <br />
            <Typography variant="h2" className={classes.text}>
              Poengsummen din er
              {` ${totalScore} `}
              <br />
              av totalt
              {` ${totalExercises} `}
              mulige!
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextExercise()}
            fullWidth
          >
            neste oppgave
          </Button>
        </Paper>
      );
    case false:
      return (
        <Paper elevation={0} className={classes.root}>
          <img src={sadPickle} alt="sad pickle" className={classes.image} />
          <div className={classes.textBox}>
            <Typography variant="h1" className={classes.text}>
              Bedre lykke neste gang!
            </Typography>
            <br />
            <Typography variant="h2" className={classes.text}>
              Poengsummen din er
              {` ${totalScore} `}
              <br />
              Av totalt
              {` ${totalExercises} `}
              mulige!
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextExercise()}
            fullWidth
          >
            neste oppgave
          </Button>
        </Paper>
      );
    default:
      return (
        <Paper className={classes.root}>
          <div>
            <Typography variant="h3" className={classes.text}>
              Noe gikk galt
            </Typography>
          </div>
        </Paper>
      );
  }
};

export default Feedback;
