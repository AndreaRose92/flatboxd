import React from 'react'

function GameDetailComments({comments}) {
  return (
    <div>
        {comments.map((comment) => <p>{comment.comment_body}</p>)}
    </div>
  )
}

export default GameDetailComments
