import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    backgroundColor: theme.palette.grey[900],
    root: {
        maxWidth: '100%',
        backgroundColor: theme.palette.grey[600],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', //16:9
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));