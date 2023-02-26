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
    setSingleUserData(obj);
  };

  return (
    <div>
      {(i!=null)? (<EditData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData} i={i} changeI={setI}/>) : null}
      <table border="1" width="100%">
        <tbody>
          <tr>
            <td>Edit Data</td>
            <td>Delete Data</td>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>Ocupation</td>
          </tr>
          {users.map((item, index) => {
            return (
              <tr>
                <td>
                  <button onClick={() => editFunc(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteFunc(index)}>Delete</button>
                </td>
                {Object.keys(item).map((key) => <td>{item[key]}</td>)}
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
