import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export default function configureStore() {
    const store = configureStore(rootReducer)
    return store
}