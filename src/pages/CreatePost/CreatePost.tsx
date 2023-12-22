import React from 'react';
import ResponsiveAppBar from '../Navbar/Appbar';
import CreatePostBody from './CreatePostBody/CreatePostBody';
import Footer from '../Footer/Footer';



function CreatePost() {
  return (
    <>
   <ResponsiveAppBar/>
   <CreatePostBody/>
    <Footer/>
    </>
  );
}

export default CreatePost;