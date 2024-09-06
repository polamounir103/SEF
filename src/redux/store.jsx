import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slice/AuthSlice';
import userSlice from './slice/UsersSlice';
import articlesSlice from './slice/ArticlesSlice';
// import jobsSlice from './slice/JobsSlice';
import coursesSlice from './slice/CoursesSlice';
import jobsReducer from "./slice/JobsSlice";

const rootreducer = combineReducers({
    auth: authSlice.reducer,
    users: userSlice.reducer,
    articles: articlesSlice.reducer,
    jobs: jobsReducer,
    courses: coursesSlice.reducer,

});
const store = configureStore({
    reducer: rootreducer
})
export default store;