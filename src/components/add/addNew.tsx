import { useState } from 'react';
import AddForm from './addForm'
// Redo with Redux

interface AddNewProps{
    formObject:any;
    dispatch:Function;
    updateUsers:Function;
}

const AddNew = ({formObject, dispatch, updateUsers}:AddNewProps) =>{
    
    const [input, setInputs] = useState({
            id: formObject.length+1,
            firstName: "",
            middleName: "",
            lastName: "",
            age: "",
            address: "",
            city: "",
            country: "",
            postcode: "",
    });

    const handleChange = (event:any) =>{
        setInputs({
            ...input,
            [event.target.name]:event.target.value
        });
    }
    
    const handleButtonClick = (e:any) =>{
        e.preventDefault();
        // Add new object using spread operator to array
        if(Array.isArray(formObject)){
            let finalObject = [...formObject, input];
            dispatch(updateUsers(finalObject))        
        } 
    }
    return(
        <div className="container form-container">
            <h2>Add New Data</h2>
            <div className="row">
                <div className="col-md-12">
                    <AddForm input = {input} setInputs={setInputs} handleChange={handleChange} formObject = {formObject} handleButtonClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    )
}
export {AddNew};