import {useLocation , useParams } from 'react-router-dom'

const ProductCard = () => {
    const {id}=useParams();
    const loaction=useLocation();
    const targetProduct=loaction.state?.Products.find((product)=>product.id===parseInt(id));
  return (
    
    <>
      <p>Product ID: {id}</p>           
      <h1>{targetProduct.name}</h1>
      <p>Price: {targetProduct.price}</p>
      <p>Color: {targetProduct.color}</p>
    </>

  )
}

export default ProductCard
