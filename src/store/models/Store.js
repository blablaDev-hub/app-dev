import { types, flow } from "mobx-state-tree"
import User from './User'
import ProjectNew from './ProjectNew';
import { checkSession, authUser, logOut } from '../../api/users'
import { getProjects } from '../../api/projects'

const Store = types
  .model({
    user: types.maybeNull(User),
    projects: types.maybeNull(types.array(ProjectNew))
  })
  .actions(self => ({
    checkSession: flow(function*() {
      try {
        const res = yield checkSession();
        if (res.success) {
          self.setUser(res.data);
          self.user.getProjects();
          self.user.checkInvites();
          return true;
        } else throw Error('no auth');
      } catch (err) {
        return false;
      }
    }),
    authUser: flow(function*(code) {
      try {
        const res = yield authUser(code);
        if (res.success) {
          self.setUser(res.data);
          return true;
        } else throw Error('code not valid');
      } catch (err) {
        return false;
      }
    }),
    logOut: flow(function*() {
      try {
        const res = yield logOut();
        if (res.success) return true
      } catch (err) {
        return false
      }
    }),
    getProjects: flow(function*() {
      try {
        const res = yield getProjects();

        if (res.success) {
          self.setProjects(res.data);
          return true
        }
        return new Error(`can't fetch projects`)
      } catch (err) {
        return err
      }
    }),
    setUser(user) {
      self.user = User.create(user)
    },
    setProjects(projects) {
      self.projects = projects.map(p => ProjectNew.create(p))
    }
  }))

export default Store
