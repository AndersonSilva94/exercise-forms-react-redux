export const ADD_INFO = 'ADD_INFO';
export const CLEAR_INFO = 'CLEAR_INFO';

export function addInfo(form_data) {
  return ({
    type: ADD_INFO,
    payload: form_data,
  })
}

export function clearInfo() {
  return ({
    type: CLEAR_INFO,
  })
}