import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Comment from './Comment.jsx';
import PostComment from './PostComment.jsx';

import './Post.scss';

class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        post:{},
        comments:[],
        err: false
    };

    this.getComments=this.getComments.bind(this);
    this.handlePost=this.handlePost.bind(this);
  }

componentDidMount () {
    this.setState({
        post: this.props.currentPost
    }, () => {
            this.getComments();
        });
  }

getComments() {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.currentPost.id}`, {
        params: {
            _limit: 10 //limit post number to 10, originally ~100
        }
    })
    .then((res) => {
        this.setState({
            comments: res.data
        });
        console.log(res.data)
    })
    .catch((err) => {
        this.handleErr()
    })
}

handlePost(name, email, comment) {
    let postData = {
        "postId": this.state.post.id,
         "name": name,
         "email": email,
         "body": comment
    };
    let currentData = this.state.comments;
    currentData.push(postData)
    axios.post('https://jsonplaceholder.typicode.com/comments', postData)
    .then((res) => {
        console.log(res)
        this.setState({comments: currentData})
    })
    .catch((err) => {
        this.handleErr()
    })
}

handleErr() {
    this.setState({err: true})
}

  render() {
    return (
        <div id="post">
            <div id="original-post">
                <h1>{this.state.post.title}</h1>
                <h3>{this.state.post.body}</h3>
            </div>
            <div id="comments-wrapper">
                <h2>Comments:</h2>
                <div id="comments">
                    {this.state.comments.map((comment) => {
                        return <Comment comment={comment} />
                    })}
                </div>
            </div>
            <PostComment handlePost={this.handlePost}/>
            <div>
              {this.state.err ? (<Redirect to='/error' />) : null}
            </div>
        </div>
        

    )
  }
};

export default Post;