import {
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_START,
  CREATE_ITEM_SUCCESS,
  GET_ITEMS_FAILURE,
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS
} from './types'

const ItemReducer = (state, action) => {
  switch (action.type) {
    case CREATE_ITEM_START:
      return {
        ...state,
        isFetching: true,
        error: false
      }

    case CREATE_ITEM_SUCCESS:
      return {
        items: [...state.items, action.payload],
        isFetching: false,
        error: false
      }

    case CREATE_ITEM_FAILURE:
      return {
        items: [],
        isFetching: false,
        error: true
      }
    case GET_ITEMS_START:
      return {
        items: [],
        isFetching: true,
        error: false
      }

    case GET_ITEMS_SUCCESS:
      return {
        items: action.payload,
        isFetching: false,
        error: false
      }

    case GET_ITEMS_FAILURE:
      return {
        items: [],
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default ItemReducer
