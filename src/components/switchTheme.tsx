
import { useDispatch, useSelector} from "react-redux"
import {switchTheme} from "./slices/themeSlicer"

const SwitchTheme = () =>{
    let stateValue = useSelector((state:any)=>state.color.value); 
    const dispatch = useDispatch(); 
    const arrColors = ["red","coral","orange","yellow","green","blue"];
    
    const RenderButtons = ():JSX.Element =>{
       
        const List = arrColors.map((color:String, index:any) =>{
            return(
                <button key={index} onClick={()=>{dispatch(switchTheme(color))}}>{color.toUpperCase()}</button>
            )
        });

        return (
            <div>   
                {List}
            </div>
        )
    }

    return(
        <>
        <div className="container" style={{backgroundColor:stateValue,height:"500px"}}>
           <RenderButtons/>
        </div>
        </>
    )
}

export  {SwitchTheme};
