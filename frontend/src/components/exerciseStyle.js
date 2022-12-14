import { makeStyles } from '@material-ui/core/styles';

const exerciseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F5F5',
    maxWidth: theme.spacing(62),
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: 0,
    borderRadius: '15px',
    maxHeight: '80vh',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '90vh',
    },
  },
  topContent: {
    padding: theme.spacing(2),
  },
  layout: {
    backgroundColor: '#F5F5F5',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    overflow: 'hidden',
    overflowY: 'auto',
  },
  navbar: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '15px 15px 0 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardcontent: {
    display: 'flex',
  },
  audiotext: {
    margin: 'auto 0 auto 0',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    float: 'right',
  },
  progresscontainer: {
    margin: theme.spacing(1),
  },
}));

export default exerciseStyles;
