import { types, flow } from 'mobx-state-tree'
import { startProject, getProjectReadMe } from "../../api/projects"

const ProjectNew = types.model({
    id: types.number,
    name: types.string,
    description: types.string,
    html_url: types.string,
    topics: types.array(types.string),
    readme: types.maybeNull(types.string)
  })
  .actions(self => ({
    startProject: flow(function*() {
      try {
        const res = yield startProject(self.name)

        if (res.success) {
          return res.data
        }
        return new Error(`can't start project`)
      } catch (err) {
        return err
      }
    }),
    getProjectReadMe: flow(function*() {
      try {
        const res = yield getProjectReadMe(self.name)

        if (res.success) {
          self.setReadme(res.content)
          return true
        }
        return new Error(`can't get ${self.name} readme`)
      } catch (err) {
        return err
      }
    }),
    setReadme(readme) {
      self.readme = window.atob(readme);
    }
  }))

export default ProjectNew
