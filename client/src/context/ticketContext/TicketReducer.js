import {
  CREATE_TICKET_FAILURE,
  CREATE_TICKET_START,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_FAILURE,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS
} from './types'

const TicketReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TICKET_START:
      return {
        ...state,
        isFetching: true,
        error: false
      }

    case CREATE_TICKET_SUCCESS:
      return {
        tickets: [...state.tickets, action.payload],
        isFetching: false,
        error: false
      }

    case CREATE_TICKET_FAILURE:
      return {
        tickets: [],
        isFetching: false,
        error: true
      }
    case GET_TICKETS_START:
      return {
        tickets: [],
        isFetching: true,
        error: false
      }

    case GET_TICKETS_SUCCESS:
      return {
        tickets: action.payload,
        isFetching: false,
        error: false
      }

    case GET_TICKETS_FAILURE:
      return {
        tickets: [],
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default TicketReducer
