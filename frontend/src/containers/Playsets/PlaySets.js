import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ReplayIcon from '@material-ui/icons/Replay';
import axios from 'axios';
import Forstaelse from '../../components/Forstaelse/Forstaelse';
import Chat from '../../components/Chat/Chat';
import RyddeSetninger from '../../components/RyddeSetninger/RyddeSetninger';
import Feedback from '../../components/feedback/Feedback';
import FinishedSet from '../../components/finishedSet/FinishedSet';
import OverviewPage from '../../components/OverviewPage/OverviewPage';
import useStyles from './styles';
/**
 * This is the container for playing exercise sets.
 * @author Maja, Julie, Simen
 * @returns A set of exercises.
 */
const PlaySets = () => {
  const location = useLocation();

  // Stepper for switching between exercises in the set.
  const [step, setStep] = useState('menu');

  // Id for the exercise being played.
  const [exerciseId, setExerciseId] = useState(0);
  // Id for the exercise set containing the exercises.
  const [id, setId] = useState(null);
  // Trackers for progress bar and feedback pages
  const [totalScore, setTotalScore] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  const [feedbackState, setFeedbackState] = useState(false);
  const [exerciseProgress, setExerciseProgress] = useState(0);
  // Tracks if a set is completed and the player's score.
  const [completed, setCompleted] = useState({ completed: false, score: 0 });

  const [redirected, setRedirected] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Lists of id's for the exercises in the set.
  const [formDataExercises] = useState({
    chat: [],
    forstaelse: [],
    ryddeSetninger: [],
  });

  // Hooks to get access to the Redux store and obtain user and auth info.
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const classes = useStyles();

  /**
   * The function will turn the response object from the API endpoint into a
   * playlist with exercise IDs. The playlist will be stored as an object with
   * three lists, one for each exercise type. Only exercise types with an ID will be
   * added, and other data will be ignored.
   * @param {object} sets An object containing sets from backend.
   */
  function createPlayList(sets) {
    formDataExercises.chat.length = 0;
    formDataExercises.forstaelse.length = 0;
    formDataExercises.ryddeSetninger.length = 0;
    Object.entries(sets).forEach(([exercise, id]) => {
      if (exercise.substring(0, 4) === 'chat' && id) {
        formDataExercises.chat.push(id);
      } else if (exercise.substring(0, 4) === 'fors' && id) {
        formDataExercises.forstaelse.push(id);
      } else if (exercise.substring(0, 4) === 'rydd' && id) {
        formDataExercises.ryddeSetninger.push(id);
      }
    });
    setTotalExercises(
      formDataExercises.chat.length +
        formDataExercises.forstaelse.length +
        formDataExercises.ryddeSetninger.length
    );
  }

  /**
   * The function will handle logic for going to the next exercise when the user
   * has finished the current exercise. It will use exercise lists created from
   * createPlayList() and check if the list contains more exercises. If it does,
   * then it goes to the next exercise. If not, then it goes to the finish. It deletes
   * the current exercise being played from the list.
   */
  function nextExercise() {
    if (formDataExercises.chat[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.chat.shift());
      setStep('chat');
    } else if (formDataExercises.forstaelse[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.forstaelse.shift());
      setStep('forstaelse');
    } else if (formDataExercises.ryddeSetninger[0]) {
      setExerciseProgress(exerciseProgress + 1);
      setExerciseId(formDataExercises.ryddeSetninger.shift());
      setStep('ryddeSetninger');
    } else {
      setStep('finish');
    }
  }

  function getContent(id) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/sets/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        createPlayList(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setTotalScore(0);
        setExerciseProgress(0);
        setStep('overview');
      })
      .catch((e) => {
        return e;
      });
  }

  // Keeps track of scores and decides what feedback to show accordingly.
  function showFeedback(score, totalPossibleScore) {
    if (score === totalPossibleScore) {
      setTotalScore(totalScore + 1);
      setFeedbackState(true);
    } else {
      setFeedbackState(false);
    }
    setStep('feedback');
  }

  function getCompleted(id) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/completed/${id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        setCompleted(res.data);
      })
      .catch((e) => {
        return e;
      });
  }

  /**
   * Retrieves the information related to the exercise set being played from backend
   * and changes step to "overview" when the restart button is clicked. This enables the user to
   * exit the exercise set currently being played. The user is redirected to the set's overviewpage.
   */
  function restartSet() {
    return (
      <Grid>
        <Button
          className={classes.replaybutton}
          variant="outlined"
          color="secondary"
          startIcon={<ReplayIcon />}
          onClick={() => {
            getContent(id);
            setStep('overview');
          }}
        >
          Restart sett
        </Button>
      </Grid>
    );
  }

  function playAudio(url) {
    new Audio(url).play();
  }

  /**
   * Only runs if an id is passed as state/props while redirected to this page.
   * I.e search bar on front page.
   */
  useEffect(() => {
    if (location.state?.id && !redirected) {
      getCompleted(location.state?.id);
      getContent(location.state?.id);
      setRedirected(true);
      setId(location.state?.id);
    }
  }, []);

  switch (step) {
    case 'overview':
      return (
        <div>
          <OverviewPage
            title={title}
            description={description}
            id={id}
            nextExercise={nextExercise}
            completed={completed}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        </div>
      );
    case 'forstaelse':
      return (
        <Forstaelse
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
    case 'chat':
      return (
        <Chat
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
    case 'ryddeSetninger':
      return (
        <RyddeSetninger
          id={exerciseId}
          showFeedback={showFeedback}
          progress={exerciseProgress}
          possible={totalExercises}
          restartSet={() => restartSet()}
          playAudio={(url) => playAudio(url)}
        />
      );
    case 'feedback':
      return (
        <div>
          <Feedback
            totalScore={totalScore}
            totalExercises={totalExercises}
            feedbackState={feedbackState}
            nextExercise={nextExercise}
          />
        </div>
      );
    case 'finish':
      return (
        <div>
          <FinishedSet
            totalScore={totalScore}
            totalExercises={totalExercises}
            percentage={totalScore / totalExercises}
            id={id}
            completed={completed}
            isAuthenticated={isAuthenticated}
            getContents={getContent}
            setSteps={setStep}
          />
        </div>
      );
    default:
      return null;
  }
};

export default PlaySets;
