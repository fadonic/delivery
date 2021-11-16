import {
  CREATE_TICKET_FAILURE,
  CREATE_TICKET_START,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_FAILURE,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS
} from './types'

// Register
export const createTicketStart = () => {
  return {
    type: CREATE_TICKET_START
  }
}

export const createTicketSuccess = ticket => {
  return {
    type: CREATE_TICKET_SUCCESS,
    payload: ticket
  }
}

export const createTicketFailure = () => {
  return {
    type: CREATE_TICKET_FAILURE
  }
}

// get Tickets
export const getTicketStart = () => {
  return {
    type: GET_TICKETS_START
  }
}

export const getTicketSuccess = ticket => {
  return {
    type: GET_TICKETS_SUCCESS,
    payload: ticket
  }
}

export const getTicketFailure = () => {
  return {
    type: GET_TICKETS_FAILURE
  }
}
