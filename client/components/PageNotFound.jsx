import React from 'react';
import HomeButton from './HomeButton.jsx';

class PageNotFound extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div id="PageNotFound">
        <h1>404</h1>
        <HomeButton />
      </div>
      

    )
  }
};

export default PageNotFound;