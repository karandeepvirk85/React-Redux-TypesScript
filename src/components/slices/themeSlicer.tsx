
import {createSlice} from "@reduxjs/toolkit";
let initialColor = "green";
const themeSlice = createSlice({
    name: "theme",
    initialState:{value:initialColor},
    reducers:{
        switchTheme(state,action){
            state.value = action.payload;
        }
    }
});

export const {switchTheme} = themeSlice.actions;
export default themeSlice;