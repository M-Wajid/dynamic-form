import React from 'react'

const AddField = (props) => {
  const {singleUser, setSingleUserData} = props;

  const onChangeHandler = (event) => {
    setSingleUserData({
      ...singleUser,
      [event.target.name]:event.target.value
    })
  }

  return (
    <div>
      <input name="newField" type="text" placeholder="newField" onChange={onChangeHandler}/> 
    </div>
  )
}

export default AddField