
import { useState } from "react"


const EditUserId = (props) => {
    console.log('EditUserId',EditUserId)
const [showButton, setShowButton] = useState(false)
const [first_name, setFirst_Name] = useState(props.first_name)
const [last_name, setLast_Name] = useState(props.last_name)
const [email, setEmail] = useState(props.email)
const [avatar, setAvatar] = useState(props.avatar)

    const handleSubmit = (e)=>{
        e.preventDefault()
    
    let updatedUserId = ({first_name, last_name, email, avatar, id: props.id})
        
    props.updateUserId(updatedUserId)
    setFirst_Name('')
    setLast_Name('')
    setEmail('')
    setAvatar('')


}


    return (
        <div style={{border:'3px solid black', margin:'20px', padding: '20px', backgroundColor:'darkcyan'}}>
            <h1>Edit User ID Card</h1>
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
               <button onClick={()=> {setShowButton(!showButton)} }>{ showButton ? '^Click Update^':'Edit ID Card' }</button>

            </form>
            
        </div>
    )
}

export default EditUserId