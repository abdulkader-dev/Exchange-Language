import React, { useState } from "react"
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi"
import entryPage from '../../assets/entryPage.png'

const Login = () => {
    const [Email, setEmail] = useState('');
    const [FullName, setFullName] = useState('');
    const [Password, setPassword] = useState('');
    // Errors
    const [EmailError, setEmailError] = useState('');
    const [FullNameError, setFullNameError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [PasswordShow, setPasswordShow] = useState(false);
  
  
    const handleEmail = (e) =>{
      setEmail(e.target.value);
      setEmailError('');
    }
    
    const handleFullName = (e) =>{
      setFullName(e.target.value);
      setFullNameError('');
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value);
      setPasswordError('');
    }
  
    const handleSubmit = () =>{
      if(!Email){
        setEmailError('Enter Your Email');
      }else{
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
          setEmailError('Enter Your Valid Email Address');
        }
      }
      if(!FullName){
        setFullNameError('Enter Your Full Name');
      }
      if(!Password){
        setPasswordError('Enter Valid Password');
      }else{
        if (!/^(?=.*[a-z])/.test(Password)) {
          setPasswordError('Lowercase alphabetical character missing.');
        }
        else if (!/^(?=.*[A-Z])/.test(Password)) {
          setPasswordError('Upercase alphabetical character missing.');
        }
        else if (!/^(?=.*[0-9])/.test(Password)) {
          setPasswordError('Numeric character missing.');
        }
        else if (!/^(?=.*[!@#$%^&*])/.test(Password)) {
          setPasswordError('At least one special character missing.');
        }
        else if (!/^(?=.{8,})/.test(Password)) {
          setPasswordError('Password must be eight characters or longer');
        }
      }
    }
  
  return (
    <>
    <div className='flex'>


<div className='w-2/4 flex justify-end mr-[69px]'>


    <div>
    <h2 className='font-nunito font-bold text-3xl text-heading'>Login to your account!</h2>
    
    <div className='relative mt-16'>
      <input onChange={handleEmail} className=' w-96 py-6 border-b border-[#808080] focus:outline-none' type="email" placeholder='Youraddres@email.com'/>
      <p className='absolute top-[-13px] font-nunito font-semibold text-heading bg-white'>Email Address</p>
      {
        EmailError &&
        <p className='w-96 p-1 mt-2 font-nunito font-semibold text-white bg-red-500 rounded-lg'>{EmailError}</p>
      }
    </div>

    

    <div className='relative mt-16'>
      <input onChange={handlePassword} className=' w-96 py-6 border-b border-[#808080] focus:outline-none'  type={PasswordShow ? 'text' : 'password'} placeholder='Enter your password'/>
      <p className='absolute top-[-13px] font-nunito font-semibold text-heading bg-white'>Password</p>
      {
        PasswordError &&
        <p className='w-96 p-1 mt-2 font-nunito font-semibold text-white bg-red-500 rounded-lg'>{PasswordError}</p>
      }
     {
       PasswordShow ? <PiEyeLight onClick={()=> setPasswordShow(!PasswordShow)} className='absolute top-[30px] right-[70px]'/>
       :
       <PiEyeClosedLight onClick={()=> setPasswordShow(!PasswordShow)} className='absolute top-[30px] right-[70px]'/>
     }
    </div>
    
    <div onClick={handleSubmit}>
      <button className='font-nunito font-semibold text-xl text-white bg-primary w-96 py-5 rounded-lg mt-16'>Login to Continue</button>
    </div>

    <p className='w-96 mb-28 text-center mt-5 font-openSans text-[13px] text-[#03014C]'>Don’t have an account ? <span className='font-openSans text-bold text-[#EA6C00]'>Sign Up</span></p>
    
    </div>
</div>


<div className='w-2/4'>
    <img className='w-full h-screen object-cover' src={entryPage} alt="image" />
</div>



</div>
    </>
  )
}

export default Login