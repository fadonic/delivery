import { createContext, useReducer } from 'react'
import TicketReducer from './TicketReducer'

const INITIAL_STATE = {
  tickets: [],
  isFetching: false,
  error: false
}

export const TicketContext = createContext(INITIAL_STATE)

export const TicketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TicketReducer, INITIAL_STATE)

  return (
    <TicketContext.Provider
      value={{
        tickets: state.tickets,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}
