import { types, flow, getParent } from "mobx-state-tree"
import { acceptInvite } from "../../api/projects";

const Repository = types.model({
  description: types.string,
  html_url: types.string,
  id: types.number,
  name: types.string,
})

const Invite = types
  .model({
    id: types.identifierNumber,
    repository: Repository
  })
  .actions(self => ({
    acceptInvite: flow(function*() {
      try {
        const res = yield acceptInvite(self.id);
        if (res.success) {
          self.removeSelf()
          return true
        }
        return new Error(`can't accept invite`)
      } catch (err) {
        return err
      }
    }),
    removeSelf() {
      getParent(self, 2)
        .removeInvite(self)
    }
  }))

export default Invite
