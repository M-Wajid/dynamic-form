import React from 'react';
import TableData from '../../components/tableData';
import TableView from '../../components/tableView';

const Home = (props) => {
  const {users, setUsersData, singleUser, setSingleUserData} = props;
  return (
    <div>
      <TableData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData} />
      <TableView users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData}/>
    </div>
  )
}

export default Home;