import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import requestReducer from './request/request.reducer';
import available_requestReducer from './requestpage/requestpage.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['request']
}

const rootReducer = combineReducers({
    user: userReducer,
    request: requestReducer,
    availblereq: available_requestReducer
});

export default persistReducer(persistConfig, rootReducer);