import React from 'react'

function GameDetailComments({comments, user, reviewUser, setComments}) {

  const displayComments = comments.map((comment) => {
    const handleDelete = e => {
      e.preventDefault()
      fetch(`/comments/${comment.id}`, {method: "DELETE"})
        .then(()=>setComments(comments.filter(c => c.id !== comment.id)))
    }

    return (<div key={comment.id}>
      <p>{comment.comment_body}</p>
      {user && (user.id === comment.user_id || user.id === reviewUser) ? <button onClick={handleDelete} >🗑️</button> : null}
    </div>)
  })

  return (
    <div className='comments'>
        {displayComments}
    </div>
  )
}

export default GameDetailComments
