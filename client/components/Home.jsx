import React from 'react';
import { Redirect } from 'react-router-dom';
import './Home.scss';
const Home = ({handleChange, postUrl, posts}) => {
    return (
        <div id="home">
          <select onChange={handleChange}>
              <option value="" selected>Select a Post</option>
              {posts.map((post => {
                  return <option key={post.id} value={post.id}>
                      {post.title}
                      </option>
              }))}
          </select>
          <div>
              {postUrl ? (<Redirect push to={postUrl} />) : null}
          </div>
        </div>
  
      )
}

export default Home;