import React, { useState } from "react";

const AddColumn = (props) => {
  const {users, setUsersData, singleUser, setSingleUserData, index, settingFlag} = props;
  const [tempObj, setTempObj] = useState(users[index]);

  const onChangeHandler = (event) => {
    setTempObj({...tempObj,[event.target.name]:event.target.value,})
  }

  const save = (event) => {
    let array = [...users];
    array[index] = tempObj;
    setUsersData(array);
    settingFlag(false);
  }

  return (
    <div>
      <input name="newField" type="text" placeholder="newField" onChange={onChangeHandler}/>
      <button onClick={save}>save</button>
    </div>
  );
};

export default AddColumn;
