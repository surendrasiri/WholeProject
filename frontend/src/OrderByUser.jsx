import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'

const OrderByUser = () => {
    
    const [data, setData] = useState([]);

    const fetchData = async (id)=>{

        try {
            const response = await axios.get(`http://localhost:5000/order/getOrderByUserId/${id}`)
            console.log(response);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        fetchData(decodedToken.id);
    });
    
  return (
    <div>
      <div>
        <h1>My Orders</h1>
      </div>
      <div>
        {data?.map((item)=>{
            return (
                <div key={item._id}>
                    <div>
                        <img src={item.productImage} alt={item.productName}/>
                    </div>
                    <div>{item.productName}</div>
                    <div>{item.price}</div>
                    <div>{item.description}</div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default OrderByUser
