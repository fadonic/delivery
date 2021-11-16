import axios from 'axios'
import {
  createTicketFailure,
  createTicketStart,
  createTicketSuccess,
  getTicketFailure,
  getTicketStart,
  getTicketSuccess
} from './TicketActions'

export const register = async (ticket, newFile, dispatch) => {
  if (newFile) {
    try {
      const name = Date.now() + newFile.name
      const data = new FormData()
      data.append('file', newFile)
      data.append('name', name)
      await axios.post('/tickets/upload', data)
      ticket.fileName = name
    } catch (err) {
      console.log(err)
    }
  }
  dispatch(createTicketStart(ticket))

  try {
    const response = await axios.post('/tickets/', ticket, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    })
    dispatch(createTicketSuccess(response.data))
  } catch (err) {
    dispatch(createTicketFailure(err))
  }
}

export const getTickets = async dispatch => {
  dispatch(getTicketStart())
  try {
    const response = await axios.get('/tickets/', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
      }
    })
    dispatch(getTicketSuccess(response.data))
  } catch (err) {
    dispatch(getTicketFailure(err))
  }
}
