// login
export const loginStart = () => {
  return {
    type: 'LOGIN_START'
  }
}

export const loginSuccess = user => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user
  }
}

export const loginFailure = () => {
  return {
    type: 'LOGIN_FAILURE'
  }
}

// logout
export const logout = () => {
  localStorage.setItem('user', null)
  return {
    type: 'LOGOUT'
  }
}

// Register
export const registerStart = () => {
  return {
    type: 'REGISTER_START'
  }
}

export const registerSuccess = user => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: user
  }
}

export const registerFailure = () => {
  return {
    type: 'REGISTER_FAILURE'
  }
}
