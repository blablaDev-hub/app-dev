import { types, flow, getParent } from 'mobx-state-tree'
import { startProject, getProjectReadMe } from "../../api/projects"

const ProjectNew = types.model({
    id: types.number,
    name: types.string,
    description: types.string,
    html_url: types.string,
    topics: types.array(types.string),
    readme: types.maybeNull(types.string),
    disabled: types.boolean
  })
  .actions(self => ({
    startProject: flow(function*() {
      self.setDisabled(true)
      try {
        const res = yield startProject(self.name)

        if (res.success) {
          const store = getParent(getParent(self))
          store.user.addProject(res.data)
          return res.data
        }
        return new Error(`can't start project`)
      } catch (err) {
        self.setDisabled(false)
        return err
      }
    }),
    getProjectReadMe: flow(function*() {
      try {
        const res = yield getProjectReadMe(self.name)

        if (res.success) {
          self.setReadme(res.data.content)
          return true
        }
        return new Error(`can't get ${self.name} readme`)
      } catch (err) {
        return err
      }
    }),
    setReadme(readme) {
      self.readme = window.atob(readme);
    },
    setDisabled(state) {
      self.disabled = state
    }
  }))

export default ProjectNew
