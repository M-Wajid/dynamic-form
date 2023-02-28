import React from "react";
import AddData from "../../components/addData";
import TableView from "../../components/tableView";

const Home = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;
  return (
    <>
      <h1>ADD NEW DATA</h1>
      <AddData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData}/>
      <div>
        <h1 style={{ textDecoration: "underline" }}>USERS</h1>
        <TableView
          users={users}
          setUsersData={setUsersData}
          singleUser={singleUser}
          setSingleUserData={setSingleUserData}
        />
      </div>
    </>
  );
};

export default Home;
