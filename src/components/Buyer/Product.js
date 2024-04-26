import React from "react";
// import Ssidear from "./Ssidebar";
// import Sheader from "./Sheader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bfooter from "./Bfooter";

function Product() {
  // const [uname, setUname] = useState({});
  const [product, setProduct] = useState([]);
  // const [cartItem,setCartItem] = useState([])
  let cartItem = [];
  const navigate = useNavigate();
  // let userData = JSON.parse(sessionStorage.getItem("User"));
  useEffect(() => {
    // console.log(userData.data.username);
    // setUname(userData.data.username);
    axios.get("http://localhost:8080/fetchPlantData").then((e) => {
      console.log(e.data);
      setProduct(e.data);
    });
  }, []);
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("cart")).length);
    // cartItem.push()
    var tempArr = JSON.parse(localStorage.getItem("cart"));
    // var i = 0
    // while (i === (JSON.parse(localStorage.getItem("cart")).length - 1)) {
    //     tempArr[i]
    // }
    // setUname(userData.data.username)
    // setProduct(...Product, JSON.parse(sessionStorage.getItem("cart")))
    cartItem = [...cartItem, JSON.parse(localStorage.getItem("cart"))];
    // axios.get('http://localhost:8080/fetchData').then(e => { console.log(e.data); setProduct(e.data) })
  }, []);
  const addToCart = (val) => {
    let len = 0;
    if (JSON.parse(localStorage.getItem("cart"))) {
      len = JSON.parse(localStorage.getItem("cart"));
    }
    for (let i = 0; i < len; i++) {
      // console.log();
      cartItem.push(JSON.parse(localStorage.getItem("cart"))[i]);
    }
    cartItem.push(val);
    // cartItem = [...cartItem, val]
    cartItem.filter((e) => e !== val);
    function removeDuplicates(array, key) {
      return array.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t[key] === obj[key])
      );
    }
    let AllCartItem = removeDuplicates(cartItem, "_id");
    let cartStr = JSON.stringify(AllCartItem);
    localStorage.setItem("cart", cartStr);
    console.log(AllCartItem);
    // console.log(cartItem)
    alert("Product added to cart.");
  };

  return (
    <>
      <header style={{ marginBottom: "2%" }} id="header" class="fixed nav-down">
        <div id="header-wrap" class="">
          <div class="main-logo">
            <a href="/">
              <img src="images/images/logo.png" alt="logo" />
            </a>
          </div>

          <nav id="navbar">
            <div class="main-menu menu-bar mx-auto" id="navigation">
              <ul class="menu-list navbar-nav">
                <li class="menu-item">
                  <a
                    href="/"
                    data-effect="Home"
                    class="nav-link"
                    //   onClick={handleHome}
                  >
                    Home
                  </a>
                </li>
                <li class="menu-item">
                  <a
                    href="/login"
                    data-effect="about"
                    class="nav-link"
                    // onClick={handleLogin}
                  >
                    Login
                  </a>
                </li>
                <li class="menu-item">
                  <a
                    href="/register"
                    data-effect="shop"
                    class="nav-link"
                    // onClick={handleRegister}
                  >
                    Register
                  </a>
                </li>
                <li class="menu-item">
                  <a
                    href="/product"
                    data-effect="shop"
                    class="nav-link"
                    // onClick={handleRegister}
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-element icon-element">
              <div class="cart for-buy">
                <a href="/cartpage">
                  <i
                    class="bi bi-cart-check"
                    //   onClick={handleCart}
                  >
                    {/* <link to="/cartpage"></link> */}
                  </i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <div> */}
      {/* <Ssidear username={uname} /> */}
      {/* <div id="content"> */}
      <div class="container my-4">
        {/* <Sheader /> */}
        <div class="row">
          {/* <div className="row mt-3 mb-5"> */}
          {product.map((val, index) => {
            return (
              // <div class="col-md-3" key={index}>
              //   <div class="product-list">
              //     <div class="product-item">
              //       <div class="image-holder">
              //         <img
              //           src={val.plantimage}
              //           alt="plant"
              //           class="image-product"
              //           style={{ height: "16rem", width: "100%" }}
              //         />

              //         <div class="like-bar">
              //           <a href="*">
              //             <i class="icon icon-like-button"></i>
              //             <i class="icon icon-liked-button"></i>
              //           </a>
              //         </div>
              //         {/* <!--like-bar--> */}
              //       </div>
              //       <div class="product-inner">
              //         <button
              //           class="add-to-cart"
              //           onClick={(e) => addToCart(val)}
              //         >
              //           <span class="cart-text">Add to cart</span>
              //           <i class="icon icon-arrow-right"></i>
              //         </button>
              //       </div>
              //     </div>
              //     <div class="product-content">
              //       <h3 class="product-title">
              //         <a href="single-product.html">{val.plantname}</a>
              //       </h3>
              //       <div class="product-price">$ {val.plantprice}</div>
              //     </div>
              //   </div>
              //   {/* <!--new-product-item--> */}
              // </div>
              // <div class="col-3" key={index}>
              //   <div class="card">
              //     <img
              //       class=""
              //       src={val.plantimage}
              //       alt="Title"
              //       style={{ height: "16rem", width: "100%" }}
              //     />
              //     <div class="card-body">
              //       <h4 class="card-title">{val.plantname}</h4>
              //       <p class="card-text">RS. {val.plantprice}</p>
              //       <button
              //         className="btn btn-dark"
              //         onClick={(e) => addToCart(val)}
              //       >
              //         Add To Cart
              //       </button>
              //     </div>
              //   </div>
              // </div>
              <div class="col-3 my-3" key={index}>
                <div class="card">
                  <img
                    class="card-img-top"
                    src={val.plantimage}
                    alt="Title"
                    style={{ height: "16rem", width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">{val.plantname}</h4>
                    <p class="card-text">RS. {val.plantprice}</p>
                  </div>
                  <button class="add-to-cart" onClick={(e) => addToCart(val)}>
                    <span class="cart-text">Add to cart</span>
                    <i class="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      <Bfooter />
    </>
  );
}

export default Product;
