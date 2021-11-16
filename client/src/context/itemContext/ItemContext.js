import { createContext, useReducer } from 'react'
import ItemReducer from './ItemReducer'

const INITIAL_STATE = {
  items: [
    {
      _id: 1,
      pickUpLocation: 'active',
      deliveryAddress: 'active'
    }
  ],
  isFetching: false,
  error: false
}

export const ItemContext = createContext(INITIAL_STATE)

export const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, INITIAL_STATE)

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}
