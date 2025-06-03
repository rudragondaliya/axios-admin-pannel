import React, { useEffect, useRef, useState } from 'react';
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/fonts.min.css'
import '../src/assets/css/kaiadmin.min.css'
import '../src/assets/css/plugins.min.css'
import { LineChart } from '@mui/x-charts';
import Home from './pages/Home';
import Form from './pages/Form';
import Table from './pages/Table';
import Aside from './components/Aside';
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';
import axios from 'axios';


const App = () => {

  const [product,setProduct] = useState({});
  const [productdata,setProductData] = useState([]);
  const [godown,setGodown] = useState([]);
  const [editId,setEditId] = useState(null)
  const [error,setError] = useState({})
  const imageRef = useRef();

  const url = 'http://localhost:3000/products';

  useEffect(()=>{
    handleFetch()
  },[])

  const handleFetch=async()=>{
    let res = await axios.get(url);
    setProductData(res.data)
  }
 const handleChange=async(e)=>{
   const {name,value,checked,files} = e.target;

   if(name === 'godown'){
    let newGodown = [...godown]
    if(checked){
      newGodown.push(value)
    }
    else
    {
      newGodown = newGodown.filter((val)=> val !== val)
    }
    setGodown(newGodown)
    setProduct({...product,godown:newGodown})
    return
   }

   if(files){
    const file = files[0];
    let reader = new FileReader();
    reader.onloadend=()=>{
      let fileData = {
        name: file.name,
        type: file.type,
        url: reader.result
      }
      setProduct({...product,[name]:fileData})
    }
     reader.readAsDataURL(file);
     return;
   }
   else
   {
     
     setProduct({...product,[name]:value});
   }
 }

  const validation=()=>{
  let errors = {};
  if(!product.product_name) errors.product_name = "product Name is required"
  if(!product.price) errors.price = "product Price is required"
  if(!product.stock) errors.stock = "product Stock is required"
  if(!product.image) errors.image = "product Image is required"
  if(!product.comment) errors.comment = "product Description is required"
  if(!product.godown) errors.godown = "Select a Warehouse"
  setError(errors)
  return Object.keys(errors).length === 0;
}

  const handleSubmit=async(e)=>{
  e.preventDefault();

   if(!validation())  return
    
    if(editId){
        await axios.put(`${url}/${editId}`,product)
        setEditId(null)
    }
    else
    {
       let res = await axios.post(url,{...product,id:String(Date.now())})
    }
    setProduct({})
    setGodown([])
    imageRef.current.value = ''
    handleFetch()
 }

 const handleDelete=async(id)=>{
   await axios.delete(`${url}/${id}`)
   handleFetch();
 }

  const handleEdit=async(id)=>{
   const editData = productdata.find((val)=> val.id === id)
   setProduct(editData);
   setEditId(id);
   setGodown(editData.godown || [])
 }


  return (
    <>
    <BrowserRouter>
      <Aside/>
       <Routes>

        <Route path="/" element={<Navigate to="/Home" replace />}></Route>
        <Route path='/Home' element={<Home 
        productdata={productdata}
         />}></Route>
        <Route path="/Form" element={<Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          product={product}
          godown={godown}
          editId={editId}
          error={error}
          imageRef={imageRef}
        />}></Route>
        <Route path="/Table" element={<Table
         productdata={productdata}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
        />}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
