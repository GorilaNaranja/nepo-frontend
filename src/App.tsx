import { useEffect, useState } from 'react'
import './App.css'
import { UserList } from './components/userList';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Footer } from './components/Footer';

function App() {
  const [sellers, setSellers] = useState([])
  const {filterSellers, setFilters} = useFilters();

  const filteredSellers = filterSellers(sellers)

  const fetchSellers = async () => {
    try {
      const response = await fetch('http://localhost:4003/sellers'); // TODO: proxy in package.json
      const data = await response.json();
      setSellers(data);
    } catch (error) {
      console.log('Error getting sellers... check if Node app is running');
    }
 };

  useEffect(() => {
   fetchSellers();
  }, [])

  return (
    <>
      <Header changeFilters={setFilters}></Header>
      <UserList users={filteredSellers}/>
      <Footer/>
    </>
  )
}

export default App
