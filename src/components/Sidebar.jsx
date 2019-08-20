import React from 'react'
import { observer } from 'mobx-react';
import Code from '@material-ui/icons/Code'
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import Web from '@material-ui/icons/Web'
import MyLocation from '@material-ui/icons/MyLocation'
import AttachFile from '@material-ui/icons/AttachFile'
import ProjectInvite from './ProjectInvite';

const SidebarInfo = ({ title, children, link, copy, download }) => {
  return (
    <p className="h__icon-copy" title={title}>
      {children}
      {link && !download && <a href={link} className="h__icon-link">{copy}</a>}
      {link && download && <a href={link} download={copy} className="h__icon-link">{copy}</a>}
      {!link && copy}
    </p>
  )
}

function Sidebar({ user }) {

  const gitHub = <SidebarInfo title="gitHub" link={user.github_url} copy={user.username}><Code /></SidebarInfo>
  const email = <SidebarInfo title="email" copy={user.email}><AlternateEmail /></SidebarInfo>
  const blog = <SidebarInfo title="blog" link={user.blog} copy={user.blog}><Web /></SidebarInfo>
  const location = <SidebarInfo title="blog" copy={user.location}><MyLocation /></SidebarInfo>
  const cv = <SidebarInfo title="cv" link={user.cv_url} copy={user.cv_title} download={true}><AttachFile /></SidebarInfo>

  return (
    <aside className="sidebar">
      <h3 className="sidebar__username">{user.username}</h3>

      <figure className="sidebar__avatar-figure">
        <img
          src={user.avatar}
          alt={user.full_name}
          className="sidebar__avatar"
        />
        <figcaption className="sidebar__avatar-caption">{user.bio}</figcaption>
      </figure>

      <h4 className="h__title">info:</h4>
      {user.github_url && gitHub}
      {user.email && email}
      {user.blog && blog}
      {user.location && location}
      {user.cv_url && cv}

      {(user.invites && user.invites.length)
        ? <div className="sidebar__invites">
            <h4 className="h__title">invites:</h4>
            <div className="sidebar__invites-list">
              {user.invites.map(i => <ProjectInvite invite={i} key={i.id} title={`${i.repository.name}`} />)}
            </div>
          </div>
        : null
      }
    </aside>
  )
}

export default observer(Sidebar)
