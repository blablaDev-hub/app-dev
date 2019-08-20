import React from 'react'

function ProjectInvite({ invite, title }) {

  return (
    <button
      className="btn project-invite"
      onClick={invite.acceptInvite}
    >
      {title}
    </button>
  )
}

export default ProjectInvite
