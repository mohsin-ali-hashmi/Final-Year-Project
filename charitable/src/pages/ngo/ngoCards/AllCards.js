
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from '../../../components/DonationCards/DonorCards';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../actions/posts';
import useStyles from './AcStyle';

const AllCards = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
      let user = localStorage.getItem('userData')
    console.log(user)
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Donations</Typography>
        
      </AppBar>
      <Grow in>
        <Container>
          
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )
}

export default AllCards
