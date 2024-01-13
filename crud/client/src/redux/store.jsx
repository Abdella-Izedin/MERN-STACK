import {configureStore} from '@reduxjs/toolkit'
import useReducer from './userSlice'

const store = configureStore({
    reducer: {
        users: useReducer 

    }
})
export default store;