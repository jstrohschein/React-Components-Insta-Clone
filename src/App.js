/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from "react";

// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import "./App.css";
import dummyData from "./dummy-data";
import Posts from "../src/components/Posts/Posts";
import SearchBar from "../src/components/SearchBar/SearchBar";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.

  const [posts, setPosts] = useState(dummyData);

  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = (postId) => {

    console.log('postId: ', postId)
    return setPosts(
      posts.map(post => {
        if(post.id === postId){
          return {...post, likes: post.likes + 1}
        }
        
        else{
          return post
        }
      })
    )
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.*/
    /*
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */

    
     
    











  };//end likePost

  return (
    <div className="App">
      <SearchBar />
      <Posts dummyData={posts} likePost={likePost} />
    </div>
  );
};

export default App;
