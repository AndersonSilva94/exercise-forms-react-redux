import { ADD_INFO, CLEAR_INFO } from '../actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  moradia: '',
  cv: '',
  job: '',
  description: '',
  submitted: false,
}

export default function formReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_INFO:
      return action.payload;
    case CLEAR_INFO:
      return INITIAL_STATE;
    default: 
      return state;
  }
}