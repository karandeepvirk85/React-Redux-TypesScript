
interface formProps{
    formObject:any;
    handleButtonClick:Function;
    input:any;
    setInputs:any;
    handleChange:Function;
}

const AddForm = ({formObject,handleChange,handleButtonClick, input, setInputs}:formProps) =>{
    return(
        <form id="myForm" className="form-control" method="post">
            <label>First Name</label>
            <input
                type="text"
                value = {input.firstName}
                className ="form-control"
                name = "firstName"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>Middle Name</label>
            <input
                type="text"
                value = {input.middleName}
                className ="form-control"
                name = "middleName"
                onChange={(e)=>{handleChange(e)}}
            />
            
            <label>Last Name</label>
            <input
                type="text"
                value = {input.lastName}
                className ="form-control"
                name = "lastName"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>Age</label>
            <input
                type="number"
                value = {input.age}
                className ="form-control"
                name = "age"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>Address</label>
            <input
                type="text"
                value = {input.address}
                className ="form-control"
                name = "address"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>City</label>
            <input
                type="text"
                value = {input.city}
                className ="form-control"
                name = "city"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>Country</label>
            <input
                type="text"
                value = {input.country}
                className ="form-control"
                name = "country"
                onChange={(e)=>{handleChange(e)}}
            />

            <label>Post Code</label>
            <input
                type="text"
                value = {input.postcode}
                className ="form-control"
                name = "postcode"
                onChange={(e)=>{handleChange(e)}}
           />
            <p></p>
            <button type="submit" onClick={(e) =>{handleButtonClick(e)}} className="btn btn-primary btn-lg btn-block">Add</button>
        </form>
    )
}
export default AddForm;