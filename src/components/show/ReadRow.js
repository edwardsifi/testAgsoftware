import React from "react";

const ReadRow = ({ user, onEditClick }) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.picture}</td>
      <td>{user.title}</td>
      <td>
        <button
          type="button"
          className="waves-effect waves-light btn-small"
          onClick={(event) => onEditClick(event, user)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadRow;