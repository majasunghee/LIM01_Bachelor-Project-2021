import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import img from '../../assets/images/defaultMan.png';
import { axiosInstanceGet, axiosInstance } from '../../helpers/ApiFunctions';
import useStyles from './style';

const OverviewPage = ({ title, description, id }) => {
  const [exerciseFeedback] = useState([]);
  const [formDataSet, setFormDataSet] = useState({ sets: id });
  // eslint-disable-next-line no-unused-vars
  const [renderPage, setRenderPage] = useState(0);
  const [ratings, setRatings] = useState({ upvote: 0, downvote: 0 });

  const classes = useStyles();
  console.log(id);

  function createFeedbackList(feedbacks) {
    Object.entries(feedbacks).forEach(([comment]) => {
      if (feedbacks[comment].sets === Number(id)) {
        exerciseFeedback.push(feedbacks[comment]);
      }
    });
  }

  function getContent() {
    const requestOne = axiosInstanceGet.get(`/comment/${id}`);
    const requestTwo = axiosInstance.get(`/rating/${id}`);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...res) => {
          createFeedbackList(res[0].data);
          setRenderPage((render) => render + 1);
          setRatings(res[1].data);
        })
      )
      .catch((e) => {
        return e;
      });
  }

  function onsubmitPostComment() {
    axiosInstance
      .post('/comment/', formDataSet)
      .then(() => {
        exerciseFeedback.length = 0;
        getContent();
      })
      .catch((e) => {
        return e;
      });
  }

  useEffect(() => {
    getContent();
  }, []);

  console.log(exerciseFeedback);

  return (
    <Paper className={classes.root}>
      <Grid className={classes.text}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <p>
            <ThumbUpIcon />
            {ratings.upvotes}
            <ThumbDownIcon />
            {ratings.downvotes}
          </p>
        </div>
      </Grid>
      <Grid className={classes.commentfield}>
        <h2>Kommentarer...</h2>
        <Grid className={classes.form}>
          <p>Legg igjen en kommentar!</p>
          <div>
            <TextField
              name="owner"
              rowsMax={1}
              required
              placeholder="Navn"
              variant="outlined"
              onChange={
                (e) =>
                  setFormDataSet({
                    ...formDataSet,
                    owner: e.target.value,
                  })
                // eslint-disable-next-line react/jsx-curly-newline
              }
            />
          </div>
          <div>
            <TextField
              className={classes.formfields}
              name="comment"
              multiline="true"
              rows={5}
              required
              placeholder="Kommentar..."
              variant="outlined"
              onChange={
                (e) =>
                  setFormDataSet({
                    ...formDataSet,
                    comment: e.target.value,
                  })
                // eslint-disable-next-line react/jsx-curly-newline
              }
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onsubmitPostComment()}
          >
            Send inn
          </Button>
        </Grid>
        <Grid>
          {exerciseFeedback.length === 0 && (
            <p>Det finnes ingen kommentarer for dette settet ennå</p>
          )}
          {exerciseFeedback.map((el) => {
            return (
              <Card className={classes.card}>
                <Avatar
                  alt="placeholder_icon"
                  src={img}
                  className={classes.media}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {el.owner}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {el.comment}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OverviewPage;
