import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home.jsx';
import Post from './components/Post.jsx';
import PageNotFound from'./components/PageNotFound.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        posts: [],
        currentPost: {},
        postUrl: undefined
    };

    this.handleSelectChange=this.handleSelectChange.bind(this)
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: 10 //limit post number to 10, originally ~100
        }
    })
    .then((res) => {
        this.setState({
            posts: res.data
        });
    })
    .catch((err) => {
        console.log(err)
    })
}

findIndex(data, targetId) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == targetId) return i
    }
}
handleSelectChange(e) {
    let selectedPost = this.state.posts[this.findIndex(this.state.posts, e.target.value)];
    this.setState({
        currentPost: selectedPost,
        postUrl: `/posts/${selectedPost.id}`
        });
        console.log(selectedPost)
}


  render() {
    return (
      <Switch>
          <Route exact path="/posts/:id">
              <Post currentPost={this.state.currentPost}/>
          </Route>
          <Route exact path="/">
              <Home handleChange={this.handleSelectChange} postUrl={this.state.postUrl} posts={this.state.posts}/>
          </Route>
          <Route>
              <PageNotFound />
          </Route>
      </Switch>
    )
  }
};

export default App;