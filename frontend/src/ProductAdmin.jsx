import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductAdmin = () => {
    
    const [data, setData] = useState();

    const fetchData = async ()=>{
        try {
            const response = await axios.get('http://localhost:5000/product/getAllProducts');
            // console.log(response);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);
    
    const handleUpdate = async (id, status)=>{
        try {
            const response = await axios.put(`http://localhost:5000/product/updateProduct/${id}`, {availability : !status});
            console.log(response);
            fetchData();
        } catch (error) {
            console.log(error)
        }
    };


  return (
    <div>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Description</th>
                    <th>Product Availability</th>
                    <th>Update Availability</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item)=>(                  // {here '?' works as '&&' in 'data && data.map' works}
                    <tr key={item._id}>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.availability ? "available" : "unavailable"}</td>
                        <td><button onClick={()=>{handleUpdate(item._id, item.availability)}}>{item.availability ? "deactivate" : "activate"}</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductAdmin
