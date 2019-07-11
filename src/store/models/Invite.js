import { types } from "mobx-state-tree";

const Repository = types.model({
  description: types.string,
  html_url: types.string,
  id: types.number,
  name: types.string,
})

const Invite = types
  .model({
    id: types.number,
    repository: Repository
  })

export default Invite
