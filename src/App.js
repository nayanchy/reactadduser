import { useState } from "react";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState([])

  const submitHandler = (data) => {
    
    setUsers(prevUsers => {
      return [...prevUsers, data]
    })

  }

  return (
    <div className="app-container">
      <Users submitHandler = {submitHandler} users={users}/>
    </div>
  );
}

export default App;
