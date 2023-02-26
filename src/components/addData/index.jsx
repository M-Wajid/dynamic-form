import React from "react";
import { useNavigate } from "react-router-dom";

const AddData = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setSingleUserData({
      ...singleUser,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = (event) => {
    let array = [...users];
    array.push(singleUser);
    setUsersData(array);
    navigate('/');
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        autoComplete="off"
        onChange={onChangeHandler}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        autoComplete="off"
        onChange={onChangeHandler}
      />
      <input
        name="gender"
        type="text"
        placeholder="Gender"
        autoComplete="off"
        onChange={onChangeHandler}
      />
      <input
        name="ocupation"
        type="text"
        placeholder="Ocupation"
        autoComplete="off"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>submit</button>
    </div>
  );
};

export default AddData;
