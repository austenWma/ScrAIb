export const SET_USERID = 'SET_USERID'

export const setUserID = (userID) => {
  return {
    type: SET_USERID,
    payload: userID
  }
}