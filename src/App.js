
import { useState } from 'react';
import './App.css';
import Table from './Table';
 import { Users } from './users';
function App() {
  const [query ,setquery] = useState("")
  console.log(query)
  const key =["first_name","last_name","email"]
  const search = (data)=> {
    return data.filter((item) => 
    key.some(key=>item[key].toLowerCase().includes(query))
      )
}
  return (
    <div className="App">
        <input className='search'
         type="text"
          placeholder='Search...' 
          onChange={(e) => setquery(e.target.value)}/>
     
        <Table data={search(Users)}/>
    </div>
  );
}

export default App;
   {/* <ul className='list'>
          {Users.filter((user)=>user.first_name.toLowerCase().includes(query)).map((user) => (
            <li className='listitem' key={user.id}>{user.first_name}</li>
          ))}
        </ul> */}