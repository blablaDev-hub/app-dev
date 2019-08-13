import { types, flow } from "mobx-state-tree"
import Project from './Project'
import Invite from './Invite'
import { checkProjectInvites, getUserProjects, uploadUserCV, logOut } from "../../api"

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
    projects: types.maybeNull(types.array(Project)),
    registered: types.string,
    username: types.string,
  })
  .actions(self => ({
    checkInvites: flow(function*() {
      try {
        const res = yield checkProjectInvites()
        if (res.success) {
          console.log(res.data);
          self.invites = res.data.map(i => Invite.create(i))
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return false
      }
    }),
    getProjects: flow(function*() {
      try {
        const res = yield getUserProjects()
        if (res.success) {
          console.log(res.data);
          self.projects = res.data.map(p => Project.create(p))
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return false
      }
    }),
    uploadCV: flow(function*(cv) {
      try {
        const res = yield uploadUserCV(cv)
        if (res.success) {
          console.log(res.data);
          return true
        } else throw Error(res.reason)
      } catch (err) {
        return false
      }
    }),
    logOut: flow(function*() {
      try {
        const res = yield logOut();
        if (res.success) return true
      } catch (err) {
        return false
      }
    })
  }))

export default User
