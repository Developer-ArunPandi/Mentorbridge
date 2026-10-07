import React from 'react'

const PropsManagement = ({productName,price,rating,isAvailable,features}) => {
  return (
    <>
      <h3>{productName}</h3>
      <h3>{price}</h3>
      <h3>{rating}</h3>
      <h3>{isAvailable}</h3>
      <h3>{features}</h3>
    </>
  )
}

export default PropsManagement
