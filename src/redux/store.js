// import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer } from './filtersSlice';
// import { contactsReducer } from './contactsSlice';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
