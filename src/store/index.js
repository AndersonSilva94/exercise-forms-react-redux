import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from '../reducers';

const store = createStore(
  formReducer,
  composeWithDevTools()
);

export default store;