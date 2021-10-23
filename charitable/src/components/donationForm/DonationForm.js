import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
// import {toastMessage} from '../helper/Toatify'
import useStyles from './style';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  
  const [postData, setPostData] = useState({ name: '', address: '', donationType: '', avatars: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((donationType) => donationType._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ name: '', address: '', donationType: '', avatars: '' });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };
  return (

    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentId ? `Editing "${post.address}"` : 'Donation Form'}
        </Typography>
        
        <TextField name="name" 
        required
        variant="outlined"
         label="Full Name" 
        fullWidth value={postData.name}
            onChange={(e) => setPostData({ ...postData, name: e.target.value })} 

        />
        <TextField name="adddress" required variant="outlined" label="Full Address" fullWidth value={postData.address} 
        
            onChange={(e) => setPostData({ ...postData, address: e.target.value })} 
        />
        <TextField name="donationType" variant="outlined" 
        label="Donation Description" fullWidth multiline rows={4} 
            value={postData.donationType} onChange={(e) => setPostData({ ...postData, donationType: e.target.value })} 
        />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} 
            onDone={({ base64 }) => setPostData({ ...postData, avatars: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" 
            size="large" type="submit" fullWidth>Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;