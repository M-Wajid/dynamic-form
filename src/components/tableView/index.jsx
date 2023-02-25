import React, { useState } from "react";
import EditData from "../editData";

const TableView = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;
  let [i,setI] = useState(null);

  const deleteFunc = (index) => {
    let array = [...users];
    array.splice(index, 1);
    setUsersData(array);
  };

  const editFunc = (index) => {
    setI(index);
    let obj = {...users[index]}
    console.log(obj);
    setSingleUserData(obj);
    
  };

  return (
    <div>
      {(i!=null)? (<EditData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData} i={i} changeI={setI}/>) : null}
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
                  <button onClick={() => editFunc(index)}>Edit</button>
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
