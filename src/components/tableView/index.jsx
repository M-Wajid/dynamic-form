import React from "react";

const TableView = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;

  const deleteFunc = (index) => {
    let array = [...users];
    array.splice(index, 1);
    setUsersData(array);
  };

  const editFunc = (index) => {
    let array = [...users];

  };

  return (
    <div>
      <table border="1" width="100%">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Ocupation</td>
            <td>Edit Data</td>
            <td>Delete Data</td>
          </tr>
          {users.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ocupation}</td>
                <td>
                  <button onClick={()=>editFunc(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteFunc(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
