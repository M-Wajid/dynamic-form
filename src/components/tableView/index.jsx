import React from 'react'

const TableView = (props) => {
  const {users, setUsersData, singleUser, setSingleUserData} = props;
  
  return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Ocupation</td>
                </tr>
                {
                    users && users.map((item,index)=>{
                        return(
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.ocupation}</td>
                          </tr>  
                        )
                        
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableView;