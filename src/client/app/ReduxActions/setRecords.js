export const SET_RECORDS = 'SET_RECORDS'

export const setRecords = (records) => {
  return {
    type: SET_RECORDS,
    payload: records
  }
}