import { types, getParent } from "mobx-state-tree"
import Invite from './Invite'

const ProjectUser = types
  .model({
    description: types.string,
    end: types.maybeNull(types.string),
    github_id: types.number,
    html_url: types.string,
    id: types.number,
    in_review: types.boolean,
    name: types.string,
    points: types.number,
    review: types.string,
    review_count: types.number,
    start: types.string,
    user_id: types.number,
  })
  .preProcessSnapshot(snapshot => ({
    ...snapshot,
    in_review: !!snapshot.in_review
  }))
  .views(self => ({
    get invite() {
      const { invites } = getParent(self, 2)

      if (!invites) return null
      return invites.find(i => i.repository.id == self.github_id)
    }
  }))

export default ProjectUser
