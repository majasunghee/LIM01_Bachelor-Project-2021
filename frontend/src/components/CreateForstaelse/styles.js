import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    maxWidth: theme.spacing(80),
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    padding: theme.spacing(2),
  },
  form: {
    width: '70%',
    margin: theme.spacing(3),
  },
  paper: {
    backgroundColor: '#f5f5f5',
    maxWidth: theme.spacing(40),
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  layout: {
    backgroundColor: '#f5f5f5',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(0),
  },
  gridText: {
    paddingBottom: theme.spacing(0),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  navbar: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    float: 'right',
  },
  answerElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  answerElementWrong: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightcoral',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  answerBtn: {
    backgroundColor: 'white',
    marginRight: theme.spacing(1),
  },
  addIcon: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
  buttonRight: {
    float: 'right',
  },
  innerMargin: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;