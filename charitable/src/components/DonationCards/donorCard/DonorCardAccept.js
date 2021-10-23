import React from 'react';
import {useHistory} from 'react-router-dom';
import { Card, CardContent, CardMedia, Button, Typography,CardActions } from '@material-ui/core/';

import useStyles from './DonorCardElement'; 


const Post = ({ post, setCurrentId }) => {
  
  const classes = useStyles();
  
  
  const history=useHistory();
  const redirect = () => {
    history.push('/Message')
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.avatars || 'http://localhost:5000/api/donate'} 
          address={post.address} 
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        
      </div>
      
      
      <Typography className={classes.address} gutterBottom variant="h5" component="h2">{post.address}</Typography>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.donationType}</Typography>
      </CardContent>
       <CardActions className={classes.cardActions}>
        <Button  onClick={redirect} size="small" color="secondary" variant="contained">Chat</Button>
                   

       </CardActions>
    </Card>
  );

};

export default Post;