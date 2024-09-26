import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartSlice from '../features/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
