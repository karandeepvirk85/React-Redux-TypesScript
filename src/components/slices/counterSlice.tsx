import {createSlice} from "@reduxjs/toolkit"

let initalState = 0;

const counterSlice = createSlice({
    name: "counterExample",
    initialState: {value:initalState},
    reducers:{
        changeState(state,action): void{
            state.value = action.payload;
        }
    }
});

export const{changeState} = counterSlice.actions;
export default counterSlice.reducer;