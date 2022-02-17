import React, { useState, Fragment } from 'react';
import ReadRow from '../../components/show/ReadRow';
import EditableField from '../../components/editable/EditableField';

const Child1 = ({ users, updateState }) => {

    const [editData, setEditData] = useState({
        firstName: "",
        lastName: "",
        picture: "",
        title: ""
    });
    //safe the id of the user to edit
    const [editUserId, setEditUserId] = useState(null);

    const onEditChange = (event) => {

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newData = { ...editData };
        newData[fieldName] = fieldValue;

        setEditData(newData);
    };

    const onEditSave = (event) => {

        const edited = {
            id: editUserId,
            firstName: editData.firstName,
            lastName: editData.lastName,
            picture: editData.picture,
            title: editData.title
        };

        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === editUserId);

        newUsers[index] = edited;
        //send changes to the father
        updateState(newUsers)
        setEditUserId(null);
    };

    const onEditClick = (event, user) => {
        setEditUserId(user.id);
        const editedValues = {
            firstName: user.firstName,
            lastName: user.lastName,
            picture: user.picture,
            title: user.title
        };

        setEditData(editedValues);
    };

    return (
        <>
            <h1>Child 1</h1>

            <table className='striped responsive-table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Picture</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <Fragment key={user.id}>
                            {editUserId === user.id ? (
                                <EditableField
                                    editData={editData}
                                    onEditChange={onEditChange}
                                    onEditSave={onEditSave}
                                />
                            ) : (
                                <ReadRow
                                    user={user}
                                    onEditClick={onEditClick}
                                />
                            )}
                        </Fragment>
                    ))}
                </tbody>

            </table>

        </>
    )
}

export default Child1;