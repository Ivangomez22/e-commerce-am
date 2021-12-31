import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.grey[600],
    // color: "#FFFFFF",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },

}));