import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    color: "#FFFFFF",
  },

  content: {
    flexGrow: 1,
    // // backgroundColor: theme.palette.background.default,
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(3),
    color: "#FFFFFF",
  },

  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'underline',
    color: "white"
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    color: "#FFFFFF",
  },

}));