import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(100),
    margin: 'auto',
    textAlign: 'center',
    borderRadius: 5,
    padding: '5vw',
  },
  gridcontainer: {
    margin: 'auto',
  },
  menu: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  menugroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuitemchat: {
    maxWidth: theme.spacing(50),
    border: '2px solid #000000',
    borderRadius: 10,
    margin: '5px',
    padding: '15px',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#FFD172',
  },
  menuitemfors: {
    maxWidth: theme.spacing(50),
    border: '2px solid #000000',
    borderRadius: 10,
    margin: '5px',
    padding: '15px',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#69C192',
  },
  menuitemrydd: {
    maxWidth: theme.spacing(50),
    border: '2px solid #000000',
    borderRadius: 10,
    margin: '5px',
    padding: '15px',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#F68365',
  },
  infoiconButton: {
    '&.MuiIconButton-colorSecondary:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  infoicon: {
    fontSize: '1.5em',
    justifyContent: 'flex-end',
  },
  deletebutton: {
    padding: 0,
  },
  form: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    maxWidth: theme.spacing(112),
    display: 'flex',
    flexDirection: 'row',
  },
  formfieldname: {
    textAlign: 'left',
    fontWeight: 'bold',
    paddingRight: theme.spacing(2),
    justifyContent: 'flex-start',
    minWidth: theme.spacing(11),
    margin: 'auto 0 auto 0',
  },
  buttoncontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: 'auto',
      marginTop: theme.spacing(4),
    },
  },
  buttons: {
    width: theme.spacing(15),
  },
  chipgrid: {
    minWidth: theme.spacing(25),
  },
  chatchip: {
    minWidth: theme.spacing(18),
    margin: theme.spacing(0.5),
    backgroundColor: '#FFD172',
  },
  forschip: {
    minWidth: theme.spacing(18),
    margin: theme.spacing(0.5),
    backgroundColor: '#69C192',
  },
  ryddchip: {
    minWidth: theme.spacing(18),
    margin: theme.spacing(0.5),
    backgroundColor: '#F68365',
  },
  errormessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: 'auto',
      marginTop: theme.spacing(4),
    },
  },
}));

export default useStyles;
