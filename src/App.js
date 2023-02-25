import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';
import Home from './pages/home';

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({name: "", email: "", gender: "", ocupation: ""});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home users={users} setUsersData={setUsers} singleUser={singleUser} setSingleUserData={setSingleUser} />}/>
        <Route path="/form" element={<FormPage users={users} setUsersData={setUsers} singleUser={singleUser} setSingleUserData={setSingleUser} />} />
      </Routes>
      
    </div>
  );
}

export default App;
