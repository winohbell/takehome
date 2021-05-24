import React from 'react';

class PostComment extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            name: '',
            email: '',
            comment: '',
        };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleCommentChange(e) {
        this.setState({comment: e.target.value})
    }

    

    render() {
        return (
            <div id="post-wrapper">
                <div id="input-wrapper">
                    <div id="info-wrapper">
                        <input type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                        <input type="email" placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
                    </div>
                    <div id="comment-wrapper">
                        <input type="text" placeholder="Comment" onChange={this.handleCommentChange.bind(this)}/>
                    </div>
                </div>
                <div id="button-wrapper">
                    <button onClick={() =>{this.props.handlePost(this.state.name, this.state.email, this.state.comment)}}>Post</button>
                </div>
                    
            </div>
        )
    }

}

export default PostComment;