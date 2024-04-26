import React from "react";
// import Ssidear from "./Ssidebar";
// import Sheader from "./Sheader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bfooter from "./Bfooter";
function CartPage() {
  // Sample array with objects
  const [uname, setUname] = useState({});
  // const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [pageRef, setPageRef] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0);
  let cartPrice = [];
  let totalPrice = 0;
  const navigate = useNavigate();
  // let userData = JSON.parse(sessionStorage.getItem("User"));
  useEffect(() => {
    // console.log(userData.data.username)
    // setUname(userData.data.username);
    setCartItem(JSON.parse(localStorage.getItem("cart")));
    // console.log()
    // console.log(JSON.parse(localStorage.getItem("cart")).length);
    let len = 0;
    if (JSON.parse(localStorage.getItem("cart"))) {
      len = JSON.parse(localStorage.getItem("cart"));
    }
    if (len === 0) {
      setTotalPrice(0);
    } else {
      for (
        let i = 0;
        i < JSON.parse(localStorage.getItem("cart")).length;
        i++
      ) {
        // console.log();
        cartPrice.push(JSON.parse(localStorage.getItem("cart"))[i].plantprice);
        totalPrice =
          totalPrice +
          Number(JSON.parse(localStorage.getItem("cart"))[i].plantprice);
        console.log((JSON.parse(localStorage.getItem("cart")).length = 0));
        setTotalPrice(totalPrice);
      }
    }
    //
    // axios.get('http://localhost:8080/fetchData').then(e => { console.log(e.data); setProduct(e.data) })
  }, [pageRef]);
  // console.log(cartItem)

  const removeItem = (val) => {
    // console.log(val)
    let array = cartItem;

    // Function to remove a specific object from the array
    function removeObject(array, objectToRemove) {
      return array.filter((obj) => obj !== objectToRemove);
    }

    // Object to remove from the array
    let objectToRemove = val;

    // Remove the specific object from the array
    let newArray = removeObject(array, objectToRemove);

    console.log(newArray);
    let cartStr = JSON.stringify(newArray);
    localStorage.setItem("cart", cartStr);
    setPageRef(pageRef ? false : true);
  };
  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: "Plant A", quantity: 1 },
  //   { id: 2, name: "Plant B", quantity: 2 },
  //   // Add more items as needed
  // ]);
  // const handleInc = (id) => {
  //   setCartItems(
  //     cartItems.map((item) =>
  //       item === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const handleDec = (id) => {
  //   setCartItems(
  //     cartItems.map((item) =>
  //       item === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mnum, setMnum] = useState("");
  const hName = (e) => {
    setName(e.target.value);
  };
  const hAddress = (e) => {
    setAddress(e.target.value);
  };
  const hMnum = (e) => {
    setMnum(e.target.value);
  };
  const handleCheckout = () => {
    let check = true;
    if (name === "") {
      check = false;
    }
    if (address === "") {
      check = false;
    }
    if (mnum === "") {
      check = false;
    }
    console.log(cartItem);

    if (check === true) {
      alert("Order Placed Successfully.");
      const dt = { name, address, mnum };
      const ci = Array.from(cartItem);
      const data = { name, address, mnum, ...ci };
      console.log(data);
      axios.post("http://localhost:8080/order", { data }).then((e) => {
        console.log(e);
      });
      // navigate("/");
    } else {
      alert("Please Fill Your Details.");
    }
  };

  return (
    <>
      {/* <div>
       <div> */}
      {/* <Ssidear username={uname} /> */}
      {/* <div id="content">
           <div class="container"> */}
      {/*<Sheader />*/}
      <header style={{ marginBottom: "2%" }} id="header" class="fixed nav-down">
        <div id="header-wrap" class="">
          <div class="main-logo">
            <a href="index.html">
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
                    {/* <link to="/cart"></link> */}
                  </i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <div class="my-5"> */}
      <div class="container">
        <div class="row mb-5">
          {/* <form class="col-md-12" method="post"> */}
          <div class="site-blocks-table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  {/* <th class="product-quantity">Quantity</th> */}
                  {/* <th class="product-total">Total</th> */}
                  <th class="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItem ? (
                  cartItem.map((val, index) => {
                    return (
                      <tr key={index}>
                        <td class="product-thumbnail">
                          <img
                            src={val.plantimage}
                            alt="img"
                            class="img-fluid"
                            style={{ width: "60%", height: "60%" }}
                          />
                        </td>
                        <td class="product-name">
                          <h2 class="h5 text-black">{val.plantname}</h2>
                        </td>
                        <td>${val.plantprice}</td>
                        {/* <td>
                          <div
                            class="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: "120px" }}
                          >
                            <div class="input-group-prepend">
                              <button
                                class="btn btn-outline-black decrease"
                                type="button"
                                // onClick={handleDec(index)}
                              >
                                -
                              </button>
                            </div>
                            <input
                              type="text"
                              class="form-control text-center quantity-amount"
                              value="2"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-black increase"
                                type="button"
                                // onClick={handleInc(index)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td> */}
                        {/* <td>${val.plantprice}</td> */}
                        <td>
                          <button
                            class="btn btn-black btn-sm"
                            onClick={(e) => removeItem(val)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
          {/* </form> */}
        </div>

        <div class="row">
          <div class="col-md-6">
            {/* <div class="row mb-5">
              <div class="col-md-6 mb-3 mb-md-0">
                <button
                  class="btn btn-dark px-5"
                  style={{
                    fontWeight: "600",
                    padding: "12px 30px",
                    borderRadius: "30px",
                    color: "#ffffff",
                    background: "#2f2f2f",
                    borderColor: "#2f2f2f",
                  }}
                >
                  Update Cart
                </button>
              </div>
              <div class="col-md-6">
                <a href="/product">
                  <button
                    class="btn btn-dark px-5"
                    style={{
                      fontWeight: "600",
                      padding: "12px 30px",
                      borderRadius: "30px",
                      color: "#ffffff",
                      background: "#2f2f2f",
                      borderColor: "#2f2f2f",
                    }}
                  >
                    Continue Shopping
                  </button>
                </a>
              </div>
            </div> */}
            {/* <div class="row">
              <div class="col-md-12">
                <label class="text-black h4" for="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div class="col-md-7 mb-3 mb-md-0">
                <input
                  type="text"
                  class="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div class="col-md-5">
                <button
                  class="btn btn-dark px-5"
                  style={{
                    fontWeight: "600",
                    padding: "12px 30px",
                    borderRadius: "30px",
                    color: "#ffffff",
                    background: "#2f2f2f",
                    borderColor: "#2f2f2f",
                  }}
                >
                  Apply Coupon
                </button>
              </div>
            </div> */}
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  onChange={hName}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Address"
                  id="address"
                  onChange={hAddress}
                ></textarea>
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  id="mnumber"
                  onChange={hMnum}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 pl-5">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12 text-right border-bottom mb-5">
                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <span class="text-black">Subtotal</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{TotalPrice}</strong>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6">
                    <span class="text-black">Total</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{TotalPrice}</strong>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <button
                      class="btn btn-dark px-5"
                      onClick={handleCheckout}
                      style={{
                        fontWeight: "600",
                        padding: "12px 30px",
                        borderRadius: "30px",
                        color: "#ffffff",
                        background: "#2f2f2f",
                        borderColor: "#2f2f2f",
                      }}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bfooter />
      {/* </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default CartPage;
