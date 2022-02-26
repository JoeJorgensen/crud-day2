
import { useState } from "react"




const NewUserId = (props) => {

const [first_name, setFirst_Name] = useState('')
const [last_name, setLast_Name] = useState('')
const [email, setEmail] = useState('')
const [avatar, setAvatar] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    
    let newUserId = {id: Math.random(), email, first_name, last_name,  avatar }
        
    props.addUserIdCB(newUserId)
    setFirst_Name('')
    setLast_Name('')
    setEmail('')
    setAvatar('')


}


    return (
        <div style={{border:'3px solid black', margin:'20px', padding: '20px', backgroundColor:'darkcyan'}}>
            <h1>New User ID Card</h1>
            <form onSubmit={handleSubmit}>
               <h3>First Name</h3>
               <input value = {first_name} onChange={(e)=>{setFirst_Name(e.target.value)}}/>
               <h3>Last Name</h3>
               <input value = {last_name} onChange={(e)=>{setLast_Name(e.target.value)}}/>
               <h3>Email</h3>
               <input value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <h3>Avatar</h3>
               <input value = {avatar} onChange={(e)=>{setAvatar(e.target.value)}}/>
               <br/>
               <br/>
               <button>Add ID Card</button>

            </form>
            
        </div>
    )
}

export default NewUserId