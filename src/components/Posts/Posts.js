import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;


  console.log(posts)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}

      {/*posts = props
         dataFromApp = dummyData (an array of objects) */}

      {props.dummyData.map((post, index) => {
        return <Post key={index} postData={post} likePost={props.likePost} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}

    </div>
  );
};

export default Posts;
