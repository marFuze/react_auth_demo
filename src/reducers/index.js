import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';

const rootReducer = combineReducers({ 
    form: formReducer,
    user: userReducer
});

//everything that state will contain

export default rootReducer;

