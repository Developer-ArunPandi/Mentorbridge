import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Products = () => {
const navigate=useNavigate();
    const products=[
        {id:1,name:"laptop",price:70000,color:"silver"},
        {id:2,name:"Mouse",price:650,color:"white"},
        {id:3,name:"keyborad",price:1500,color:"black"},
        {id:4,name:"pendrive",price:450,color:"red"},
    ]

    const handleDetails=(id)=>{
    navigate(`/products/${id}`, { state: { Products: products } });
  
    }
  return (
    <>
    <ul>
   {products.map((product)=>(<><li key={product.id} style={{margin:"10px"}}>Name : {product.name} <br /> </li> 
    <button onClick={()=>(handleDetails(product.id))}>view details</button></>))}
    </ul>
    </>
  )
}

export default Products
