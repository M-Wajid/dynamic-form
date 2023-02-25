import React from 'react'

const EditData = (props) => {
    const { users, setUsersData, singleUser, setSingleUserData, i, changeI} = props;
  
    const onChangeHandler = (event) => {
      setSingleUserData({
        ...singleUser,
        [event.target.name]: event.target.value,
      });
    };
  
    const onClickHandler = (event) => {
        let array = [...users];
        array[i]=singleUser;
        setUsersData(array);
        console.log(users);
        changeI(null);
        console.log(i);
    };
  
    return (
      <div>
        <input
          name="name"
          type="text"
          defaultValue={users[i].name}
          autoComplete="off"
          onChange={onChangeHandler}
        />
        <input
          name="email"
          type="text"
          defaultValue={users[i].email}
          autoComplete="off"
          onChange={onChangeHandler}
        />
        <input
          name="gender"
          type="text"
          defaultValue={users[i].gender}
          autoComplete="off"
          onChange={onChangeHandler}
        />
        <input
          name="ocupation"
          type="text"
          defaultValue={users[i].ocupation}
          autoComplete="off"
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>Update</button>
      </div>
    );
  };

export default EditData