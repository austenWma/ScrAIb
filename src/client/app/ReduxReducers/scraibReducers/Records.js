export const Records = (state={
  records: [],
}, action) => {
  switch(action.type) {
    case 'SET_RECORDS': {
      return Object.assign({}, state, {
        records: [...state.records, action.payload.records] || state.records,
      })
    }
    default: {
      return state
    }
  }
}
