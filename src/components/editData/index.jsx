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
        {Object.keys(users[i]).map((key) => (
          <input name={key} type="text" defaultValue={users[i][key]} autoComplete="off" onChange={onChangeHandler}/>
        ))}
        <button onClick={onClickHandler}>Update</button>
      </div>
    );
  };

export default EditData