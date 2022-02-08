import { createSlice } from "@reduxjs/toolkit";
import formObject  from "./../userObject";

const userSlice = createSlice({
    name: "usertable",
    initialState: {value:formObject},
    reducers:{
        updateUsers:(state, action) =>{
            state.value = action.payload;
        },
    }
});

export const {updateUsers} = userSlice.actions;
export default userSlice.reducer;

