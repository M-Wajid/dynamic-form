import React from 'react'
import AddData from '../../components/addData'

const FormPage = (props) => {
  const {users, setUsersData, singleUser, setSingleUserData} = props;
  return (
    <div>
      <AddData users={users} setUsersData={setUsersData} singleUser={singleUser} setSingleUserData={setSingleUserData} />
    </div>
  )
}

export default FormPage