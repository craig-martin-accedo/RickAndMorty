import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';

import Seasons from './reducers/Seasons';

const rootReducer = combineReducers({
  seasons: Seasons,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
