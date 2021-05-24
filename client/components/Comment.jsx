import React from 'react';

const Comment= ({ comment }) => {
  return (
    <div className='individual-comment'>
      <div><h3>User:{comment.name}</h3></div>
      <div><h5>Comment:{comment.body}</h5></div>
    </div>
  )
}

export default Comment;