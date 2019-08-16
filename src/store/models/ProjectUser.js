import { types, flow } from "mobx-state-tree"

const ProjectUser = types
  .model({
    description: types.string,
    end: types.maybeNull(types.string),
    github_id: types.number,
    html_url: types.string,
    id: types.number,
    name: types.string,
    points: types.number,
    review: types.string,
    review_count: types.number,
    start: types.string,
    user_id: types.number,
  })

export default ProjectUser
