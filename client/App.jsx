import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import Post from './components/Post.jsx';
import PageNotFound from'./components/PageNotFound.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <Switch>
          <Route exact path="/posts/:id">
              <Post />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route>
              <PageNotFound />
          </Route>
          
          
      </Switch>
    )
  }
};

export default App;