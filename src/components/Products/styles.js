import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default[121212],
    backgroundColor: theme.palette.grey[900],
    // padding: theme.spacing(3),maxWidth: '100%',
    
  },
  root: {
    flexGrow: 1,
  },
}));
