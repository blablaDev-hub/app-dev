import { types, flow, destroy } from "mobx-state-tree"
import ProjectUser from './ProjectUser'
import Invite from './Invite'
import { checkProjectInvites, getUserProjects, uploadUserCV } from "../../api/users"

const User = types
  .model({
    avatar: types.string,
    bio: types.string,
    blog: types.string,
    company: types.maybeNull(types.string),
    cv_title: types.string,
    cv_url: types.string,
    email: types.string,
    full_name: types.string,
    github_id: types.number,
    github_url: types.string,
    hireable: types.string,
    id: types.number,
    invites: types.maybeNull(types.array(Invite)),
    location: types.string,
    projects: types.maybeNull(types.array(ProjectUser)),
    registered: types.string,
    username: types.string,
  })
  .views(self => ({
    get hasProjects() {
      return self.projects && !!self.projects.length
    },
    get hasInvites() {
      return self.invites && !!self.invites.length
    }
  }))
  .actions(self => ({
    checkInvites: flow(function*() {
      try {
        const res = yield checkProjectInvites()
        if (res.success) {
          self.setInvites(res.data)
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return err
      }
    }),
    getProjects: flow(function*() {
      try {
        const res = yield getUserProjects()
        if (res.success) {
          self.setProjects(res.data)
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return err
      }
    }),
    uploadCV: flow(function*(cv) {
      try {
        const res = yield uploadUserCV(cv)
        if (res.success) {
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return err
      }
    }),
    setProjects(projects) {
      self.projects = projects.map(p => ProjectUser.create(p))
    },
    addProject(project) {
      self.projects.push(ProjectUser.create(project))
    },
    setInvites(invites) {
      self.invites = invites.map(i => Invite.create(i))
    },
    addInvite(invite) {
      self.invites.push(Invite.create(invite))
    },
    removeInvite(invite) {
      destroy(invite)
    },
  }))

export default User
