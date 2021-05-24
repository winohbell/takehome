import React from 'react';

const Comment= ({ comment }) => {
  return (
    <div className='individual-comment'>
      <div><h4>{comment.name}:</h4></div>
      <div><h5>{comment.body}</h5></div>
    </div>
  )
}

export default Comment;