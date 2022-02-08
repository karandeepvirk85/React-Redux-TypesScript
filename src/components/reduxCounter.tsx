import { useSelector, useDispatch } from "react-redux";
import {changeState} from "./slices/counterSlice";

export const ReduxCounter = () =>{
    
    const dispatch = useDispatch();
    
    let currentValue:number = useSelector((state:any)=>state.reduxCounter.value);
    
    const handleUpDown = (action:String) =>{
        switch(action){
            case "INCREMENT":
            dispatch(changeState(currentValue+1));
            break;
            case "DECREMENT":
            dispatch(changeState(currentValue-1));
        }
    }

    return(
        <>
        <div className="container" style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            <button onClick={()=>{handleUpDown("INCREMENT")}} className="btn btn-warning m-3">+</button>
            <div className="text-white counter">{currentValue}</div>
            <button onClick={()=>{handleUpDown("DECREMENT")}} className="btn btn-warning m-3">-</button>
        </div>
        </>
    );
}