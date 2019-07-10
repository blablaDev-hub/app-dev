const API = process.env.REACT_APP_API_USERS;

/**
 * @desc check user session
 */
const checkSession = () => {
  return fetch(`${API}/check_session`, {
  	method: 'GET',
  	credentials: 'include',
  })
  .then(res => res.json())
}

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
 * @desc log out user
 */
const logOut = () => {
  return fetch(`${API}/logout`, {
  	method: 'DELETE',
  	credentials: 'include',
  })
  .then(res => res.json())
  .catch(console.error)
}

export {
  checkSession,
  authUser,
  logOut,
}
