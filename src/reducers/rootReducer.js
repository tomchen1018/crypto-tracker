import { combineReducers } from 'redux';
import cryptos from './cryptos';


const rootReducer = combineReducers({
  cryptos
});

export default rootReducer;
