import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1400,
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'absolute',
    right: 0,
  },
  menuSVG: {
    fill: 'white',
  },
  list: {
    background: 'linear-gradient(90deg, #53A77A 1.46%, #80D197 100%)',
  },
  listItem: {
    color: '#14423b',
  },
  title: {
    flexGrow: 1,
    color: '#367051',
    fontWeight: '600',
    padding: theme.spacing(1),
    float: 'right',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#47956A',
      color: 'white',
      borderRadius: '15px',
    },
  },
  userName: {
    flexGrow: 1,
    fontWeight: '100',
    margin: theme.spacing(1),
    textDecoration: 'none',
    textAlign: 'end',
    color: 'antiquewhite',
  },
  right: {
    flexGrow: 1,
  },
  loginContainer: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  spacing: {
    ...theme.mixins.toolbar,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    background: 'linear-gradient(90deg, #53A77A 1.46%, #80D197 100%)',
  },
  img: {
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
  },
}));

export default useStyles;
