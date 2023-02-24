import { useState } from 'react';
import './App.css';
import Home from './pages/home';

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({name: "", email: "", gender: "", ocupation: ""});

  return (
    <div className="App">
      <Home users={users} setUsersData={setUsers} singleUser={singleUser} setSingleUserData={setSingleUser} />
    </div>
  );
}

export default App;
