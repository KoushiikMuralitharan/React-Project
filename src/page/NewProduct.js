import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from '../Utility/Imagetobase64';

const NewProduct = () => {
  const [data,setData] = useState({
    name:"",
    category: "",
    image:"",
    price:"",
    description: "",
  })
  const handleOnChange = (e) =>{
      const {name,value} = e.target
      setData((preve)=>{
         return{
          ...preve,
          [name] : value
         }
      })
  }
  const uploadImage = async(e) =>{
    const  data = await ImagetoBase64(e.target.files[0])
        //sconsole.log(data)

        setData((preve)=>{
          return{
            ...preve,
            image : data
          }
        })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className=' p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'onSubmit={handleSubmit} >
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={ handleOnChange}/>
        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange}>
          <option>power tools</option>
          <option> garden tools</option>
          <option> hand tools</option>
          <option>screwdrivers</option>
          <option>drillers</option>
        </select>
        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'> 
             {
              data.image ?  <img src={data.image} className='h-full'/> : <span className='text-5xl'><IoCloudUploadOutline /></span>
             } 
             <div className='hidden'>
             <input type={"file"} accept='image/*' id='image' onChange={uploadImage} />
             </div>
        </div>
        </label>

        <label htmlFor='price' className='my-1'> Price</label>
        <input type={'text'} className='bg-slate-200 p-1 my-1' name='price' onChange={ handleOnChange}></input>
        <label htmlFor='description'>Description</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={ handleOnChange} ></textarea>
        <button className='bg-slate-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct