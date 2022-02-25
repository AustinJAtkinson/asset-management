import React, {useState} from "react";

class Department {
    constructor(name){
        this.name = name;
        this.assets = [];
    }
}

export const NewDepartmentForm = ({addNewDepartment}) => {
    const [name, setName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newDepartment = new Department(name);
            addNewDepartment(newDepartment)
            setName('');
        }else{
            console.log('Invalid Input')
        }
    }

    return(
        <>
            <h4 className="h4">Add New Department</h4>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col">
                        <input 
                            className="form-control"
                            type="text" 
                            placeholder="Department" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-success" type="submit">Add Department</button>
                    </div>
                </div>
            </form>
        </>
    )
}