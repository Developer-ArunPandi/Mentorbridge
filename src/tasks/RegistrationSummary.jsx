import React from 'react'

const RegistrationSummary = ({ form }) => {
  const { Name, Email, Phone, City, Gender, Terms } = form;

  return (
    <>
      <h4>Name : {Name}</h4>
      <h4>Email : {Email}</h4>
      <h4>Phone : {Phone}</h4>
      <h4>City : {City}</h4>
      <h4>Gender : {Gender}</h4>
      <h4>Terms : {Terms ? "Accepted" : "Rejected"}</h4>
    </>
  )
}

export default RegistrationSummary;