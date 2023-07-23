import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [users, setUsers] = useState()

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(users=>setUsers(users))
  }, [])

  if(!users){
    return (
      <div className='c-loading'>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div className='c-layout'>
      {users && users.map(user=>{return (<UserCard key={user.id} user={user}/>)})}
    </div>
  );
}

export default App;
