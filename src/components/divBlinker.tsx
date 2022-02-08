import { useEffect, useState } from "react";

interface Props{
    colorsObject: any;
    shuffleColors:Function;
}

const DivBlinker = () =>{
    const arrColors = ['red','orange','green','blue','yellow','black','gray','pink'];
    
    // Declare hooks on top
    const[colorsObject, shuffleColors] = useState(arrColors);
    
    const handelChange = () =>{
        let ShuffledcolorsObject = Object.values(colorsObject).sort(()=> Math.random() - 0.5);
        shuffleColors(ShuffledcolorsObject);
    }
    
    const RenderDivs = ():JSX.Element[]=>{
        const List = colorsObject.map((color, index)=>{
            return(
                <div onClick = {handelChange} key= {index} className={`divheightwidth col ${color}`}></div>
            );
        })
        return List;
    }

    return(
        <div className="container">
            <div className="row">
                {RenderDivs()}
            </div>
        </div>
    )
}
export default DivBlinker;

