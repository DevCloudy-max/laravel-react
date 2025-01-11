import { useRef } from "react";
import {Link} from "react-router-dom";
export default function Signup(){

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser,setToken} = useStateContext()


  const onSubmit = (ev) =>{
    ev.preventDefault()
    const  payload ={
      name: nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmationRef:passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup',payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.Token)
    })

    .catch(err => {
      const response = err.response;
      if(response && response.status === 422){
        console.log(reposone.data.errors);
      }
    })    
  }

    return(
      <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input ref={nameRef} type="text" placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email Address" />

          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation" />

          <button className="btn btn-block">
           SignUp
          </button>
          <p className="message">
         Already Registerd?<Link to="/login">Sign in</Link>
          </p>
        </form>
        </div> 
     
    </div>
    )
}