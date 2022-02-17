import React from "react";

const EditableField = ({editData, onEditChange, onEditSave}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a firstName..."
                    name="firstName"
                    value={editData.firstName}
                    onChange={onEditChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a last name..."
                    name="lastName"
                    value={editData.lastName}
                    onChange={onEditChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an picture..."
                    name="picture"
                    value={editData.picture}
                    onChange={onEditChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter an title..."
                    name="title"
                    value={editData.title}
                    onChange={onEditChange}
                ></input>
            </td>
            <td>
                <button className="waves-effect waves-light btn-small" onClick={()=>onEditSave()}>Save</button>
            </td>
        </tr>
    );
};

export default EditableField;