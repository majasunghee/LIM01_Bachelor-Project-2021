import React from 'react';
import { Button, Card, Grid, CardHeader } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from './styles';

/**
 * Button used to go to next exercise in set. It changes color depending on whether right or
 * wrong answer was given.
 * @author Simen
 * @param {object} props
 * @property {function} handleNextTask OnClick function for component button.
 * @property {boolean} answerState Decides what type of component will be returned depending on
 * user answer.
 * @returns Card component with onClick button.
 */

function NextExerciseBtn({ handleNextTask, answerState }) {
  const classes = useStyles();
  switch (answerState) {
    case 'incorrect':
      return (
        <Grid item xs={12}>
          <Card className={classes.answerElementWrong}>
            <CardHeader
              avatar={<CancelIcon className={classes.icons} />}
              title=" Feil! "
            />
            <div className={classes.btnParent}>
              <Button
                data-testid="resultButtonIncorrect"
                onClick={handleNextTask}
                className={classes.answerBtn}
                fullWidth
                size="small"
              >
                <TrendingFlatIcon fontSize="large" />
              </Button>
            </div>
          </Card>
        </Grid>
      );
    case 'correct':
      return (
        <Grid item xs={12}>
          <Card className={classes.answerElement}>
            <CardHeader
              avatar={<CheckCircleIcon className={classes.icons} />}
              title="Riktig!"
            />
            <div className={classes.btnParent}>
              <Button
                data-testid="resultButton"
                onClick={handleNextTask}
                className={classes.answerBtn}
                fullWidth
                size="small"
              >
                <TrendingFlatIcon fontSize="large" />
              </Button>
            </div>
          </Card>
        </Grid>
      );
    default:
      return <></>;
  }
}

export default NextExerciseBtn;
