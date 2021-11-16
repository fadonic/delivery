import axios from 'axios'
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess
} from './AuthActions'

export const login = async (user, dispatch) => {
  dispatch(loginStart(user))
  try {
    const response = await axios.post('/auth/login', user)
    dispatch(loginSuccess(response.data))
  } catch (err) {
    dispatch(loginFailure(err))
  }
}

export const register = async (user, dispatch) => {
  dispatch(registerStart(user))
  try {
    const response = await axios.post('/auth/register', user)
    dispatch(registerSuccess(response.data))
  } catch (err) {
    dispatch(registerFailure(err))
  }
}
