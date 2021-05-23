import React from 'react';
import axios from 'axios';

class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        comments:[]
    }
  }

// componentDidMount () {
//       axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`, {
//           params: {
//               _limit: 10 //limit post number to 10, originally ~100
//           }
//       })
//       .then((res) => {
//           this.setState({
//               data: res.comments
//           });
//           console.log(res.comments)
//       })
//   }

  render() {
    return (
      <div id="Post">in post</div>

    )
  }
};

export default Post;