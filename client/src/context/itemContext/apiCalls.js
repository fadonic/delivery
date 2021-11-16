import axios from 'axios'
import {
  createItemFailure,
  createItemStart,
  createItemSuccess,
  getItemFailure,
  getItemStart,
  getItemSuccess
} from './ItemActions'

export const register = async (item, dispatch) => {
  dispatch(createItemStart(item))
  try {
    const response = await axios.post('/items/', item, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    })
    dispatch(createItemSuccess(response.data))
  } catch (err) {
    dispatch(createItemFailure(err))
  }
}

export const getItems = async dispatch => {
  dispatch(getItemStart())
  try {
    const response = await axios.get('/items/', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    })
    dispatch(getItemSuccess(response.data))
  } catch (err) {
    dispatch(getItemFailure(err))
  }
}

export const getItemsByUserId = async (userId, dispatch) => {
  dispatch(getItemStart())
  try {
    const response = await axios.get(`/items/user_by_id?id=${userId}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    })
    dispatch(getItemSuccess(response.data))
  } catch (err) {
    dispatch(getItemFailure(err))
  }
}
