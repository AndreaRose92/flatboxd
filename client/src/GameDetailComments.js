import React from 'react'

function GameDetailComments({comments}) {

  console.log(comments)

  const sortedComments = comments.sort((a,b)=>b.id-a.id)

  return (
    <div>
        {sortedComments.map((comment) => <p>{comment.comment_body}</p>)}
    </div>
  )
}

export default GameDetailComments
