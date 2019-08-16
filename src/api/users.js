const API = process.env.REACT_APP_API_USERS;

/**
 * @desc check user session
 */
const checkSession = () => fetch(`${API}/check_session`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json())

/**
 * @desc authenticate user
 * @param {String} code
 */
const authUser = (code) => {
  const fd = new FormData();
  fd.append('code', code)

  return fetch(`${API}/auth`, {
      method: 'POST',
      credentials: 'include',
      body: fd,
    })
    .then(res => res.json())
}

/**
 * @desc get all user projects
 */
const getUserProjects = () => fetch(`${API}/get_projects`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json())

/**
 * @desc check if any project invites are pending
 */
const checkProjectInvites = () => fetch(`${API}/check_invites`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => res.json())

/**
 * @desc upload user CV
 * @param {Object} cv
 */
const uploadUserCV = (cv) => {
  const fd = new FormData();
  fd.append('cv', cv)

  return fetch(`${API}/upload_cv`, {
      method: 'PATCH',
      credentials: 'include',
      body: fd,
    })
    .then(res => res.json())
}

/**
 * @desc log out user
 */
const logOut = () => fetch(`${API}/logout`, {
    method: 'DELETE',
    credentials: 'include',
  })
  .then(res => res.json())
  .catch(console.error)

export {
  checkSession,
  authUser,
  getUserProjects,
  checkProjectInvites,
  uploadUserCV,
  logOut,
}
