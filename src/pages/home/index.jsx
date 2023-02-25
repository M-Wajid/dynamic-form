import React from "react";
import { useNavigate } from "react-router-dom";
import TableView from "../../components/tableView";

const Home = (props) => {
  const { users, setUsersData, singleUser, setSingleUserData } = props;
  const navigate = useNavigate();
  return (
    <>
      <button
        style={{
          marginTop: "50px",
          width: "50%",
          padding: "10px 10px 10px 10px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/form")}
      >
        Add Data
      </button>
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
