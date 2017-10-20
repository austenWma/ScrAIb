export const UserID = (state={
  userID: '',
}, action) => {
  switch(action.type) {
    case 'SET_USERID': {
      return Object.assign({}, state, {
        userID: action.payload.userID || state.userID,
      })
    }
    default: {
      return state
    }
  }
}
