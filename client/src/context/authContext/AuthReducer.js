const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_START':
      return {
        user: null,
        isFetching: true,
        error: false
      }

    case 'REGISTTER_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false
      }

    case 'REGISTER_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true
      }

    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false
      }

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false
      }

    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true
      }

    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false
      }

    default:
      return state
  }
}

export default AuthReducer
