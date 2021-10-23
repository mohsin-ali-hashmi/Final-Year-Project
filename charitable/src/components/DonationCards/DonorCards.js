import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './donorCard/DonorCard';
import useStyles from './DonorCardsElements';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

console.log(posts)

  return (
    
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          
          !post.email? 
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          :
            console.log("email")
        ))}
      </Grid>
    
  );
};

export default Posts;