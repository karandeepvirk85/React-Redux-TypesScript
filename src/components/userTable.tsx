import { useDispatch, useSelector } from "react-redux";
import {AddNew} from "./add/addNew";
import {updateUsers} from "./slices/userSlice"

// Get Array of JSX of Li tags
const MyTable = () =>{
    // we got states from redux whether they are initial or updated because intial object is already passed in redux
    const formObject = useSelector((state:any)=>state.userTable.value);
    
    const dispatch = useDispatch();
    
    const removeItem = (id:any) =>{
        let newFormAray;
        
        newFormAray = formObject.filter(function(item:any) {
            return item.id !== id;
        });

        dispatch(updateUsers(newFormAray));
    }

    // Render Rows For Table From DB
    const RenderItems = (formObject:any) =>{ 
        const UsersList = formObject.map((Items:any, index:any)=>{
            return(
                <tr key={index}>
                    <td>{Items.firstName}</td>
                    <td>{Items.middleName}</td>
                    <td>{Items.lastName}</td>
                    <td>{Items.age}</td>
                    <td>{Items.address}</td>
                    <td>{Items.city}</td>
                    <td>{Items.postcode}</td>
                    <td>{Items.country}</td>
                    <td><button onClick={()=>{removeItem(Items.id)}} className="btn btn-danger">X</button></td>
                </tr>
            )
        });
        // return array
        return UsersList;
    }

    // Handle Filter Function
    const handeClickFunction:Function = ():void =>{
        
        if(Array.isArray(formObject)){
            let newFormAray;
            newFormAray = formObject.filter(function(item:any) {
                if(item["firstName"].length !== 0 && item.hasOwnProperty("middleName")){
                    return item;
                }
            });

            dispatch(updateUsers(newFormAray));
        }
    }

    const ReturnTable = () =>{
        return(
            <div className="table-container">            
            <button className="btn btn-success m-3" onClick = {()=>{handeClickFunction()}}> Filter Rows With Empty Cells </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>
                            <strong>First Name</strong>
                        </td>
                        <td>
                            <strong>Middle Name</strong>
                        </td>
                        <td>
                            <strong>Last Name</strong>
                        </td>
                        <td>
                            <strong>Age</strong>
                        </td>
                        <td>
                            <strong>Address</strong>
                        </td>
                        <td>
                            <strong>City</strong>
                        </td>
                        <td>
                            <strong>Post Code</strong>
                        </td>
                        <td>
                            <strong>Country</strong>
                        </td>
                        <td>
                            <strong>Remove</strong>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {RenderItems(formObject)}
                </tbody>
            </table>
            <AddNew formObject = {formObject} updateUsers ={updateUsers} dispatch ={dispatch}/>
            </div>
        )
    }
    return(
        <ReturnTable/>        
    )
}

export default MyTable;