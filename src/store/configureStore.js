import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const expenseStore = configureStore({
    reducer: rootReducer
});

export default expenseStore;