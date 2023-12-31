import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCreatePostMutation } from '../../../features/posts/postApi';

const CreatePostBody = () => {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleCreatePost = async () => {
    try {
      await createPost({ title, body: description });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
    return (
    <Box
      sx={{
        width: '80%',
        margin: 'auto',
        textAlign: 'left',
        paddingTop: '20px',
      }}
    >
      <div>
        <Typography variant="h4" fontWeight="bold" marginTop="20px" marginBottom="20px">Create Your Post Here</Typography>
      </div>

      <div>
        <Typography variant="h6">Title</Typography>
        <TextField fullWidth id="title" label="Enter title" variant="outlined" margin="normal" />
      </div>

      <div>
        <Typography variant="h6">Description</Typography>
        <TextField
          fullWidth
          multiline
          rows={5}
          id="description"
          label="Enter description"
          variant="outlined"
          margin="normal"
        />
      </div>

      <div>
      <Button
          variant="contained"
          sx={{ bgcolor: "#2196F3" }}
          onClick={handleCreatePost}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Post'}
        </Button>
      </div>
    </Box>
  );
};

export default CreatePostBody;
