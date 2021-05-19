import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import messageReducer from './message/message-reducer';
import roomReducer from './room/room-reducer';
import themeReducer from './theme/theme-reducer';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    userReducer,
    messageReducer,
    roomReducer,
    themeReducer,
});

export default persistReducer(persistConfig, rootReducer);