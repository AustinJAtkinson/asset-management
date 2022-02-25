import React, { useEffect, useState } from "react";
import { NewDepartmentForm } from "./NewDepartmenForm";
import { assetApi } from "../restApi/assestApi";
import Department from "./Department";

function DepartmentsList(){
    const [departments, setDepartments] = useState([{name: '', _id: '', assets:[]}]);

    useEffect(() => {
        fetchDepartments();
    }, [])

    const fetchDepartments = async() => {
        const departmentsFromApi =  await assetApi.get();
        setDepartments(departmentsFromApi);
    }

    const addNewDepartment = async (department) => {
        await  assetApi.createDepartment(department);
        fetchDepartments();
    }

    const deleteDepartment = async (department) => {
        await assetApi.deleteDepartment(department);
        fetchDepartments();
    }

    const updateDepartment = async(department) => {
        await assetApi.updateDepartment(department);
        fetchDepartments()
    }


    return (
        <>
            <NewDepartmentForm addNewDepartment={addNewDepartment} />
            <div>
                {departments.map((department) => (
                    <Department
                        department={department}
                        key={department._id}
                        updateDepartment={updateDepartment}
                        deleteDepartment={deleteDepartment}
                    />
                ))}
            </div>
        </>
    )
}

export default DepartmentsList;