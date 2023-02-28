
const AddData = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;


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
    // setSingleUserData(null);
  };

  return (
    <div>
      {users.length === 0 ? (
        <>
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
        </>
      ) : (
        <>
           {Object.keys(users[0]).map((key)=>(
            <>
             <input name={key} type="text" onChange={onChangeHandler} defaultValue={key}/>
            </>
          ))}
          <button onClick={onClickHandler}>submit</button>
        </>
      )}

      
    </div>
  );
};

export default AddData;
