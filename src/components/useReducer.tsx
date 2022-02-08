import { useReducer } from "react";
const initailValues:any = {input:""};

const reducer = (state:any, action:any) =>{
    switch(action.type){
        case "INPUT":
        return {...state,input:action.value}
        break;
    }
}
export const UseReducerHook = () =>{    

    const [state, dispatch] = useReducer(reducer, initailValues);
    
    const handleChange = (e:any) =>{
        //Dispatch pass whole action object to reducer with action and new value
        dispatch({
            type: "INPUT", 
            value: e.target.value
        });    
    }

    return(
        <>
        <input style={{border:`6px solid ${state.input}`}} onChange={(e)=>{handleChange(e)}} type = "text" value={state.input} name="name" className="form-control"/>
        </>
    )
}
