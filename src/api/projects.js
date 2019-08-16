const API = process.env.REACT_APP_API_PROJECTS;

/**
 * @desc get all projects
 */
const getProjects = () => fetch(`${API}`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json());

/**
 * @desc get project readme.md file
 * @param {repo} String
 */
const getProjectReadMe = (repo) => fetch(`${API}/readme/${repo}`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json());

/**
 * @desc start project
 * @param {project} String
 */
const startProject = (project) => {
  const fd = new FormData();
  fd.append('project', project);

  return fetch(`${API}/start`, {
      method: 'POST',
      credentials: 'include',
      body: fd,
    })
    .then(res => res.json());
}

/**
 * @desc accept project invitation
 * @param {inviteId} String
 */
const acceptInvite = (inviteId) => fetch(`${API}/accept_invite/${inviteId}`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json());

export {
  acceptInvite,
  getProjectReadMe,
  getProjects,
  startProject,
}
