import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Exercise_three/Products";
import ProductCard from "./Exercise_three/ProductCard";
// import Navbar from "./Exercise_one/Navbar";
// import Home from "./Exercise_one/Home";
// import About from "./Exercise_one/About";
// import Shop from "./Exercise_one/Shop";

// import Login from "./Exercise_two/Login";
// import Admin from "./Exercise_two/Admin";
// import ProtectedRoute from "./Exercise_two/ProtectedRoute";



function App() {
  // const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Products" element={<Products/>} />
        <Route path="/Products/:id" element={<ProductCard/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

{
  /* // Exercise one 
          <Route path="/" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
          </Route> */
}




        // <Route path="/" element={<Login />} />
        // <Route
        //   path="/admin"
        //   element={
        //     <ProtectedRoute isAuthenticated={isAuthenticated}>
        //       <Admin />
        //     </ProtectedRoute>
        //   }
        // />