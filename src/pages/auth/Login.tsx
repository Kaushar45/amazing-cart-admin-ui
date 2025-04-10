import { useState } from "react"

const LoginPage = () => {
const [inputs , setInputs]=useState({})

function handleForm(e){
    e.preventDefault()
    console.log(inputs)
}

  return (
    <div className="flex items-center justify-center h-screen">

    <form onSubmit={handleForm} className="flex flex-col gap-5">
<input required type="email" name="email" placeholder="Email" 
onChange={(e)=>setInputs((prev)=>({...prev,email:e.target.value}))}/>
<input required type="password" name="password" placeholder="Password"
onChange={(e)=>setInputs((prev)=>({...prev, password:e.target.value}))}
 />
<button type="submit">Login</button>

</form>
    </div>
  )
}

export default LoginPage
