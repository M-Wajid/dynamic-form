import React, { useState } from "react";
import { UserObjKeys } from "../../constants/userObjKeys";
import EditData from "../editData";

const TableView = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;
  let [i, setI] = useState(null);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [tempVariable, setTempVariable] = useState("");
  let temp = "";
  let tempArray = [];
  let tempIndex = null;

  const deleteFunc = (index) => {
    let array = [...users];
    array.splice(index, 1);
    setUsersData(array);
  };

  const editFunc = (index) => {
    setI(index);
    let obj = { ...users[index] };
    setSingleUserData(obj);
  };

  const onChangeHandler = (event) => {
    temp = event.target.value;
    setTempVariable(temp);
  };

  const onClickHandler = () => {
    UserObjKeys.push(tempVariable);
    setFlag(false);
    setFlag2(true);
  }

  const indexFunc = (index) => {
    tempIndex = index;
    tempArray = [...users];
  }

  const addColumnData = (event) => {
    console.log(tempVariable);
    tempArray[tempIndex][tempVariable] = event.target.value;    /// error in this commad
  }

  const save = () => {
    console.log(tempArray)
    setUsersData(tempArray);
    setFlag2(false);
  }

  return (
    <div>
      {i != null ? (
        <EditData
          users={users}
          setUsersData={setUsersData}
          singleUser={singleUser}
          setSingleUserData={setSingleUserData}
          i={i}
          changeI={setI}
        />
      ) : null}
      <table border="1" width="100%">
        <tbody>
          <tr>
            {UserObjKeys.map((i) => {
              return <th>{i}</th>;
            })}
            <th>
              {flag ? (
                <>
                  <input type="text" onChange={onChangeHandler} />
                  <button onClick={onClickHandler}>save</button>
                </>
              ) : (
                <button onClick={() => setFlag(true)}>Add Column</button>
              )}
            </th>
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
                {Object.keys(item).map((key) => (
                  <td>{item[key]}</td>
                ))}
                {flag2 ? (
                  <input name={tempVariable} type="text" onClick={() => indexFunc(index)} onChange={addColumnData}/>
                ) : null}
              </tr>
            );
          })}
        </tbody>
        
      </table>
      {(flag2) ? (<button style={{width: "100%"}}on onClick={save}>save</button>) : null} 
    </div>
  );
};

export default TableView;
