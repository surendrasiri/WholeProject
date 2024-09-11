import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const OrderPage = () => {

    const { id } = useParams();
    // console.log(id);

    const [productData, setProductData] = useState({});
    const [formData, setFormData] = useState({});

    const fetchProductById = async (id)=>{

      try {
        const response = await axios.get(`http://localhost:5000/product/getProductById/${id}`);
        // console.log(response);
        // console.log(setFormData);
        const Data = response.data.data;
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        setProductData(Data);
        // setFormData({...formData, ...Data});
        setFormData({...formData, productId : Data._id, productName : Data.productName, price : Data.price, description : Data.description, userId : decodedToken.id});
      } catch (error) {
        console.log(error);
      }
    };

    console.log(formData);

    useEffect(()=>{
      fetchProductById(id);
    },[]);

    const handleChange = (e)=>{
      setFormData({...formData, [e.target.name] : e.target.value});
    };

    const handleClick =async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/order/addOrder", formData);
        console.log(response);
        alert("Order Placed Successfully");
      } catch (error) {
        console.log(error);
      }
    }
    
  return (
    <div>
      <div className='flex justify-between p-4'>
        <div className='rounded-xl bg-white'>
          <img src={productData.productImage} alt={productData.productName} className='p-2'/>
        </div>
        <div className='font-semibold p-10 text-3xl space-y-5'>
          <p>{productData.productName}</p>
          <p className='font-bold'>Rs.{productData.price}/-</p>
          <p>{productData.description}</p>
        </div>
      </div>
      <div className='text-xl'>
        <h1 className='font-semibold'>Delivery To :</h1>
        <form className='mt-10'>
          <div className='grid grid-cols-2 gap-10'>
            <div className='my-2'>
              <label>Customer Name</label>
              <input type='text' placeholder='Customer Name' name='userName' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='my-2'>
              <label>Contact Number</label>
              <input type='text' placeholder='Customer Contact Number' name='userContactNumber' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='my-2'>
              <label>Quantity</label>
              <input type='number' placeholder='Quantity' name='quantity' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='col-span-2'>
              <label>Address</label>
              <input type='text' placeholder='Address' name='address' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='my-2'>
              <label>City</label>
              <input type='text' placeholder='City' name='city' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='my-2'>
              <label>State</label>
              <input type='text' placeholder='State' name='state' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
            <div className='my-2'>
              <label>Pin Code</label>
              <input type='number' placeholder='Pin Code' name='pinCode' className='p-2 outline-none border-2 border-gray-500 rounded-lg block my-2 w-full' onChange={handleChange}/>
            </div>
          </div>
          <button className='p-2 bg-green-500 rounded-md text-white my-4' onClick={handleClick}>Confirm Order</button>
        </form>
      </div>
    </div>
  )
}

export default OrderPage
