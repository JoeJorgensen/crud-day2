
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import UserId from './UserId';
import NewUserId from './NewUserId';

function App() {
  const [userIds, setUserIds] = useState ([])
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState (null)

  const getUserIds = ()=> {
      setLoading(true)
    axios
    .get('https://reqres.in/api/users?delay=1')
    .then((res)=>{
      console.log('res:', res)
      console.log('res.data:', res.data)
      console.log('res.data.data:', res.data.data)
      setUserIds(res.data.data)
      setLoading(false)
    })
    .catch ((err)=>{
      setError('An Error Occurred!')
      setLoading(false)
    });
  };
  const deleteUserId = (id)=>{
    let newUserState = userIds.filter((u)=> u.id !== id)
    setUserIds(newUserState)
  }
  const addUserId = (user) =>{
    let newUserState = [user,...userIds ]

    setUserIds(newUserState)
  }
  const updateUserId = (userId)=>{
    let updatedUsers = userIds.map(u=>{
      if(u.id === userId.id){
        return userId
        
      }
      return u
      })
      setUserIds(updatedUsers)
  }
  const renderUserIds = () => {
    console.log(userIds)
    return userIds.map((user)=>{ 
   return <UserId key={user.id} {...user} updateUserId={updateUserId} deleteUserId = {()=>deleteUserId(user.id)} />
  })
}

  return (
    <div className="App">
      <h1>User ID Cards</h1>
      <button disabled ={loading}onClick={getUserIds}>{loading ? 'Loading...' : "Get User ID Cards"}</button>
     <br/>
     <br/>
     <NewUserId addUserIdCB = {addUserId} />
      <div>{!loading && renderUserIds()}</div>
      {/* <button onClick = {()=> deleteUserId(props)} >Delete User ID</button> */}
      <div>{JSON.stringify(userIds)}</div>
      { error &&  <p style={{color:'red'}}> ERROR: {error} </p>}
    </div>
  );
};

export default App;
