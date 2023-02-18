import React from 'react'

export default function Comments(props) {

  return (
    <>
        <p className='cmts'>
            <img className='cmtsImg' src="avatar.png" alt="user" />
            <span className='cmtsText'>{props.commentBody}</span>

            {/* Like and Dislike */}
            <img className='like' src="like.png" alt="Like" />
            <img className='like' src="dislike.png" alt="Dislike" />

            {/* Edit and Delete links */}
            <i> <img className='cmtsTrash' src="trash.png" alt="Trash" /> </i>
            <i> <img className='cmtsEdit' src="pencil.png" alt="Edit" /> </i>
        </p>
    </>
  )
}
