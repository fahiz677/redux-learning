import {configureStore} from "@reduxjs/toolkit"
import colourReducer from "./colour/colourSlice"
import countReducer from "./count/countSlice"

export default configureStore({
    reducer:{
        color:colourReducer,
        count:countReducer
    }
})