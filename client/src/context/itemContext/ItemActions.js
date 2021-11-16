import {
  CREATE_ITEM_FAILURE,
  CREATE_ITEM_START,
  CREATE_ITEM_SUCCESS,
  GET_ITEMS_FAILURE,
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS
} from './types'

// Register
export const createItemStart = () => {
  return {
    type: CREATE_ITEM_START
  }
}

export const createItemSuccess = item => {
  return {
    type: CREATE_ITEM_SUCCESS,
    payload: item
  }
}

export const createItemFailure = () => {
  return {
    type: CREATE_ITEM_FAILURE
  }
}

// get items
export const getItemStart = () => {
  return {
    type: GET_ITEMS_START
  }
}

export const getItemSuccess = item => {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: item
  }
}

export const getItemFailure = () => {
  return {
    type: GET_ITEMS_FAILURE
  }
}
