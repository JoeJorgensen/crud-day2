import EditUserId from './EditUserId'
import { useState } from 'react'
const UserId = (props)=>{
    // console.log('UserId.js')
   const [showState, setShowState] = useState(false)
   const renderUserId=()=>{
   return(
    <>
   <h1>{props.first_name} {props.last_name}</h1>
    <br/>
    <h3>Email: {props.email}</h3>
    <br/>
    <h3>Avatar: {props.avatar}</h3>
    <br/>
    <h3>ID: {props.id}</h3>
    <button onClick = {()=> props.deleteUserId(props.id)} >Delete User ID</button>
    </>
    )
   }
     return (
        <div style={{border:'3px solid black', margin:'20px', padding: '20px', backgroundColor:'darkcyan'}}>
           <button onClick={()=>{setShowState(!showState)}}>{showState ? 'Update' : 'Edit'}</button>
           {showState ?  <EditUserId {...props} />
           : renderUserId()}
     </div>
    )
}

export default UserId