import React from 'react'
import TableData from '../../components/tableData'

const FormPage = (props) => {
  const {users, setUsersData, singleUser, setSingleUserData} = props;
  return (
    <div>
      <TableData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData} />
    </div>
  )
}

export default FormPage