import { types, flow } from "mobx-state-tree"
import User from './User'
import { checkSession, authUser, logOut } from '../../api'

const Store = types
  .model({
    user: types.maybeNull(User)
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
    authUser: flow(function* (code) {
      try {
        const res = yield authUser(code);
        if(res.success) {
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
    setUser(user) {
      self.user = User.create(user)
    }
  }))

export default Store
