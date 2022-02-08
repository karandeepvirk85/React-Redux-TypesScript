import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./components/slices/userSlice"
import useCounter from "./components/slices/counterSlice"
import useThemeSlicer from "./components/slices/themeSlicer"

const storage = configureStore({
    reducer:{
        userTable:useReducer,
        reduxCounter:useCounter,
        color:useThemeSlicer.reducer
    }
})

export default storage;
 