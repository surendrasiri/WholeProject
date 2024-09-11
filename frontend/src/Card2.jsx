import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card2 = () => {

  const navigate = useNavigate();
const [data, setData] = useState();
// console.log(data);

  const fetchData = async ()=>{
    try {
      const response = await axios.get('http://localhost:5000/product/getAvailableProducts');
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handleOrder = (id)=>{
    const token = localStorage.getItem('token');
    const role = localStorage.getItem("role");
    if(!token){
      alert("Please Login");
      return navigate("/login");
    }
    if(role === "admin"){
      return alert("Only Customers Can Place Orders");
    }
    navigate(`/order/${id}`);
  }

  return (
    <div>
      <div className='grid grid-cols-4'>
        {data && data.map((item)=>(
          <div key={item._id} className='m-4 bg-white p-3 rounded-xl font-semibold'>
            <a href={item.link}><img src={item.productImage} alt={item.productName}/></a>
            <div className='flex mt-4'>
              <div className=' w-7/12'>
                <p>{item.productName}</p>
                <p className='font-bold'>Rs. {item.price}/-</p>
                <p>{item.description}</p>
              </div>
              <div className='p-6 mx-4'>
                <button className='bg-yellow-400' onClick={()=>{handleOrder(item._id)}}>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card2
