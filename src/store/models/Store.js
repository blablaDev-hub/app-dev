import { types, flow } from "mobx-state-tree"
import User from './User'
import { checkSession, authUser } from '../../api'

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
    setUser(user) {
      self.user = User.create(user)
    }
  }))

export default Store
