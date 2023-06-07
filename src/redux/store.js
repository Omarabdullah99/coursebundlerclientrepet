import {configureStore} from '@reduxjs/toolkit'
import { profileReducer, userReducer } from './reducer/userReducer'
import { coursesReducer } from './reducer/coursesReducer'
import { adminReducer } from './reducer/adminReducer'



const store= configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:coursesReducer,
        admin:adminReducer

    }
})

export default store

//eita last e thakbe
export const server="http://localhost:4000/api/v1" //note v1 er pore /hobe na, note it