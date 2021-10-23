import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Form from './DonationForm';
import { getPosts } from '../../actions/posts';
import useStyles from './DFElement';

const DisplayForm = () => {
    const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Donation Form</Typography>
      </AppBar>
      <Grow in>
        <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '60%',
        transform: 'translate(-52%, -50%)'
    }}>
        <Container>

            <Grid item xs={12} sm={10} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            
        </Container>
        </div>
      </Grow>
      </ Container>
    )
}

export default DisplayForm
