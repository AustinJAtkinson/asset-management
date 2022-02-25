import React from "react";
import { NewAssetForm } from "./NewAssetForm";

const Department = ({department, updateDepartment, deleteDepartment}) => {

    const addAsset = (asset) => {
        console.log(asset);
        console.log(department);
        updateDepartment({...department, assets: [...department.assets, asset]})
    }


    const deleteAsset = (assetGuid) => {
        const updatedDepartment = {
            ...department,
            assets: department.assets.filter((a) => a.guid !== assetGuid)
        }
        updateDepartment(updatedDepartment);
    }

    const Assets = () => (
        <p>
            {department.assets?.map((asset, index) => (
                <div className="row" key={index}>
                    <div className="col">
                    <span><strong>Name: </strong>{asset.name}</span>
                    </div>
                    <div className="col">
                    <span><strong>Value: </strong>{asset.value}</span>
                    </div>
                    <div className="col">
                    <button className="btn btn-danger" onClick={(e) => deleteAsset(asset.guid)}>Delete</button>
                    </div>
                </div>
            ))

            }
        </p>
    )

    return(
        <div className="card">
            <div className="card-header">
                <h2 className="h2">{department.name}</h2>
                <button className="btn btn-danger" onClick={(e) => deleteDepartment(department)}>Delete</button>
            </div>
            <div className="card-body">
                <NewAssetForm addNewAsset={addAsset}/>
                <Assets/>
            </div>
        </div>
    )
}

export default Department;