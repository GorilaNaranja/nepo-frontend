import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/userList'
import { Seller } from './models/User'

function App() {
  const [sellers, setSellers] = useState<Seller[]>([])

  useEffect(()=>{
    fetch('http://localhost:4003/sellers')
    .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setSellers(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [])

  return (
    <>
    <h1 className='userCard-title'>List of sellers</h1>
      <UserList users={sellers}/>
    </>
  )
}

export default App
