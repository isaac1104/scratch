import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tableNumberReducer from './table_number_reducer';

const rootReducer = combineReducers({
  tableNumber: tableNumberReducer,
  form: formReducer
});

export default rootReducer;
