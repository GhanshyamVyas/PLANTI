// import "./App.css";
// import $ from "./components/js/jquery-3.2.1.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/js/bootstrap.bundle.min.js";
import "./components/js/ui-easing.js";
import "./components/css/bootstrap.min.css";
import "./components/css/style.css";
import Home from "./components/Buyer/Home";
import Smain from "./components/Seller/Smain";
import Blogin from "./components/Buyer/Blogin";
import Bregister from "./components/Buyer/Bregister.js";
import Bcart from "./components/Buyer/Bcart";
// import Bfooter from "./components/Buyer/Bfooter.js";
// import Navbar from "./components/Buyer/Navbar";
// import Bmain from "./components/Buyer/Bmain.js";
import Sdashboard from "./components/Seller/Sdashboard";
import Sorders from "./components/Seller/Sorders";
import Slistings from "./components/Seller/Slistings";
import Saddplant from "./components/Seller/Saddplant";
import Supdateplant from "./components/Seller/Supdateplant";
import Sprofile from "./components/Seller/Sprofile";
import UpdateStud from "./components/Seller/UpdateStud.jsx";
import Products from "./components/Products.js";
import Product from "./components/Buyer/Product.js";
import CartPage from "./components/Buyer/CartPage.js";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Smain /> */}
      {/* <Blogin /> */}
      {/* <Bregister /> */}
      {/* <Bcart /> */}
      {/* <Navbar /> */}
      {/* <Bmain /> */}
      {/* <Bfooter /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Blogin />} />
          <Route path="/register" element={<Bregister />} />
          <Route path="/cart" element={<Bcart />} />
          <Route path="/smain" element={<Smain />} />
          <Route path="/Sdashboard" element={<Sdashboard />} />
          <Route path="/Sorders" element={<Sorders />} />
          <Route path="/Slistings" element={<Slistings />} />
          <Route path="/Saddplant" element={<Saddplant />} />
          <Route path="/Supdateplant" element={<Supdateplant />} />
          <Route path="/Sprofile" element={<Sprofile />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/cartpage" element={<CartPage />} />
        </Routes>
      </Router>

      {/* <UpdateStud /> */}
    </div>
  );
}

export default App;
