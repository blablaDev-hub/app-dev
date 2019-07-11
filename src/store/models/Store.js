import { types, flow } from "mobx-state-tree";
import User from './User'
import { checkSession } from '../../api'

const Store = types
  .model({
    user: types.maybeNull(User)
  })
  .actions(self => ({
    checkUser: flow(function*() {
      try {
        const res = yield checkSession();
        if (res.success) {
          self.setUser(res.data)
          return true
        } else throw Error('no auth')
      } catch (err) {
        return false
      }
    }),
    setUser(user) {
      self.user = User.create(user)
    }
  }))

export default Store
