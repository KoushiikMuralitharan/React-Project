import React, { useState } from "react";
import loginSignupImage from "../images/login-animation.gif";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImagetoBase64 } from "../Utility/Imagetobase64";
import './signup.css'
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image:"",
  });
  console.log(data)
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowCPassword = () => {
    setShowCPassword((preve) => !preve);
  };
  const handleOnChange = (e) =>{
    const {name,value} =e.target
    setData((preve)=>{
      return {
        ...preve,
        [name] : value
      }
    })
  }
  const handleUploadProfileImage = async(e)=>{
        const  data = await ImagetoBase64(e.target.files[0])
        console.log(data)

        setData((preve)=>{
             return{
              ...preve,
              image: data
             }
        })
  }
console.log(process.env.REACT_APP_SERVER_DOMAIN)
  const handleSubmit = async(e)=>{
      e.preventDefault()
      const {firstName,email,password,confirmpassword} = data
      if(firstName && email &&password && confirmpassword){
        if(password === confirmpassword){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
            method:"POST",
            headers:{
              "content-type"  : "application/json"
            },
            body: JSON.stringify(data)
          })
          
          const dataRes = await fetchData.json()
          console.log(dataRes);
           alert("Successfull")
        }else{
          alert("Recheck the password");
        }
      }
      else{
        alert("Please enter the required fields")
      }
  }
  return (
    <div className="pics">
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={data.image? data.image:loginSignupImage} className="w-full h-full" />
          <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-20 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-white">Upload</p>
          </div>
          <input type={"file"} id="profileImage" accept="image/*" className='hidden' onChange={handleUploadProfileImage}/>
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            ></input>
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <MdRemoveRedEye /> : <IoEyeOffSharp />}
            </span>
          </div>

          <label htmlFor="Confirmpassword"> Confirm Password</label>
          <div className="flex px-2 py-1  bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showCPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.confirmpassword}
              onChange={handleOnChange}
            ></input>
            <span className="flex text-xl" onClick={handleShowCPassword}>
              {showCPassword ? <MdRemoveRedEye /> : <IoEyeOffSharp />}
            </span>
          </div>
          <button type="submit" className=" w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 px-1 rounded-full mt-4 ">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have Account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
