import React, { useState } from "react";

const DependentDropdown = () => {
  const locationData = {
    India: ["Tamil Nadu", "Kerala", "Karnataka"],
    USA: ["California", "Texas", "New York"],
  };

  const [country,setCountry]=useState("");
  const [state, setState] = useState('');
const handleCountryChange=(e)=>{
   setCountry(e.target.value)
   setState("")
}
  return (
    <>
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    {Object.keys(locationData).map((country)=>(
    <option value={country} key={country} onChange={handleCountryChange}>{country}</option>
 )) }
  </select>
  <label for="floatingSelect">Country</label>
</div>
<br />
{/* <div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    {Object.entries(locationData).map(([_,states])=>(
    states.map((state)=>(<option value={state}>{state}</option>))
 )) }
  </select>
  <label for="floatingSelect">State</label>
</div>
<br /> */}
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
   {locationData[country].map((state)=>(<option value={state} key={state}>{state}</option>))}
  </select>
  <label for="floatingSelect">State</label>
</div>
<br />

    </>
  );
};

export default DependentDropdown;
