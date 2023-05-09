import { combineReducers, createStore } from 'redux';

import { valueReducer } from './reducerValue';

const rootReducer = combineReducers({
  value: valueReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
