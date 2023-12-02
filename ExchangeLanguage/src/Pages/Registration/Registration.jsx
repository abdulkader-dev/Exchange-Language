import React, { useState } from 'react'
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [FullName, setFullName] = useState('');
  const [Password, setPassword] = useState('');
  // const [Success, setSuccess] = useState('');
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
    
    if(Email && FullName && Password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))){
      
      createUserWithEmailAndPassword(auth, Email, Password).then(()=>{
          
          sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success('Verify your email');
            setEmail('');
            setFullName('');
            setPassword('');
            setTimeout(() => {
              navigate('/Login');
            }, 6000);
          });

        }).catch((error) => {
          if(error.code.includes('auth/email-already-in-use')){
            setEmailError('This Email is already used');
            };
        });

    }
  }

  return (
    <>
     
     <div className='flex'>


<div className='w-2/4 flex justify-end mr-[69px]'>


    <div>
    <h2 className='font-nunito font-bold text-3xl text-heading'>Get started with easily register</h2>
    <h3 className='font-nunito text-xl text-[#808080] mt-3'>Free register and you can enjoy it</h3>
    
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />

    {/* {
    Success &&
      <h3 className='font-nunito text-xl text-white bg-green-500 mt-3 p-3.5 w-96 text-center'>{Success}</h3>
    } */}
    
    {/* Email input field start */}
    <div className='relative mt-16'>
      <input onChange={handleEmail} value={Email} className=' w-96 px-14 py-6 rounded-lg border border-[#11175D]' type="email" placeholder='Enter Your Email'/>
      <p className='absolute top-[-12px] left-[50px] px-[6px] font-nunito font-semibold text-heading bg-white'>Email Address</p>
      {
        EmailError &&
        <p className='w-96 p-1 mt-2 font-nunito font-semibold text-white bg-red-500 rounded-lg'>{EmailError}</p>
      }
    </div>
    {/* Email input field end */}

      {/* FullName input field start */}
    <div className='relative mt-16'>
      <input onChange={handleFullName} value={FullName} className=' w-96 px-14 py-6 rounded-lg border border-[#11175D]' type="text" placeholder='Enter Your Full Name'/>
      <p className='absolute top-[-12px] left-[50px] px-[6px] font-nunito font-semibold text-heading bg-white'>Full Name</p>
      {
        FullNameError &&
        <p className='w-96 p-1 mt-2 font-nunito font-semibold text-white bg-red-500 rounded-lg'>{FullNameError}</p>
      }
    </div>
      {/* FullName input field end */}

{/* Password input field start */}
    <div className='relative mt-16'>
      <input onChange={handlePassword} value={Password} className=' w-96 px-14 py-6 rounded-lg border border-[#11175D]' type={PasswordShow ? 'text' : 'password'} placeholder='Enter Your Password'/>
      <p className='absolute top-[-12px] left-[50px] px-[6px] font-nunito font-semibold text-heading bg-white'>Password</p>
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
{/* Password input field end */}

{/* Submit button start */}
    <div onClick={handleSubmit}>
      <button className='font-nunito font-semibold text-xl text-white bg-primary w-96 py-5 rounded-[86px] mt-16'>Sign up</button>
    </div>
{/* Submit button end */}


    <p className='w-96 mb-28 text-center mt-5 font-openSans text-[13px] text-[#03014C]'>Already  have an account ? <Link to='/login' className='font-openSans text-bold text-[#EA6C00]'>Sign In</Link></p>
    
    </div>
</div>

{/* Right side start */}
<div className='w-2/4'>
    <img className='w-full h-screen object-cover' src="images/Registration.png" alt="image" />
</div>
{/* Right side end */}



</div>

    </>
  )
}

export default Registration