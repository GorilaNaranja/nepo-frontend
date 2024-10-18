import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/userList'
import { Seller } from './models/User'

function App() {
  const [sellers, setSellers] = useState<Seller[]>([])
  
  const fetchPost = async () => {
    try {
      const response = await fetch('http://localhost:4003/sellers');
      const data = await response.json();
      setSellers(data);
    } catch (error) {
      console.log('Error getting sellers... check if Node app is running');
    }
 };

  useEffect(() => {
   fetchPost();
  }, [])

  return (
    <>
      <UserList users={sellers}/>
    </>
  )
}

export default App
