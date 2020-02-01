
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function But() {
  const classes = useStyles();
// Todo add action events 
  return (
    <div className={classes.root}>
      <Button variant="contained">Back</Button>
      <Button variant="contained" color="primary">
        Book
      </Button>
      
    </div>
  );
}