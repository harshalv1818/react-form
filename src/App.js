import { useState } from 'react'

import './App.css'

function App() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [car, setCar] = useState("BMW");

    const displayOnConsole = (e)=>{
      e.preventDefault();
      console.log(firstName + " " + lastName + " " +email+ " " +password+ " " +car)

      //you can write post api here..
    }
  

  return (
    <>
    <div>
        <h1>Form made with react</h1>
        <fieldset >
          <form className='flex' action="#" method="get">

          <div>
          <label htmlFor="firstName">First Name : </label>
          <input type='text' id='firstName' placeholder='Enter Your First Name' onChange={(e)=>{
            setFirstName(e.target.value)
          }} value={firstName}></input>
          </div>

          <div>
          <label htmlFor="lastName">Last Name : </label>
          <input type='text' id='lastName' placeholder='Enter Your Last Name' onChange={(e)=>{
            setLastName(e.target.value)
          }} value={lastName}></input>
          </div>

          <div>
          <label htmlFor="email">Email : </label>
          <input type='email' id='email' placeholder='Enter Your Email Id' onChange={(e)=>{
            setEmail(e.target.value)
          }} value={email}></input>
          </div>

          <div>
          <label htmlFor="password">Password : </label>
          <input type='text' id='password' placeholder='Enter Your Password' onChange={(e)=>{
            setPassword(e.target.value)
          }} value={password}></input>
          </div>

          <div>
          <label htmlFor="selectCar">Select Your Car </label>
            <select name="selection" id="selectCar" 
                        value={car}
                        onChange={(e) =>
                            setCar(
                                e.target.value
                            )
                        }>
              <option value="BMW" >BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
            </select>
          </div>

          

          <button onClick={displayOnConsole}>Submit</button>
          </form>

          
        </fieldset>

      </div>
    </>
  )
}

export default App
