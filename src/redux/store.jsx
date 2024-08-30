import { configureStore, combineReducers } from '@reduxjs/toolkit';
import jobslice from './slice/jobslice';
const rootreducer = combineReducers({
    jobs: jobslice.reducer,
});
const store = configureStore({
    reducer: rootreducer
})
export default store;