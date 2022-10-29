import './App.css';
import { useEffect, useState } from 'react';
import AllUser from './compo/AllUser';
import UserForm from './compo/UserForm';

function App() {
  const [user, setuser] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/user")
    .then(res=> res.json())
    .then(data=>{
      setuser(data);
    })
  },[])
  return (
    <div className="App">
      <h1>Setting User on data base by react using mongodb</h1>
      <UserForm></UserForm>
      {
        user.map(us=> <AllUser key={us.id} user={us}></AllUser>)
      }
    </div>
  );
}

export default App;
