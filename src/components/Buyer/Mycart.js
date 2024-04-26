import React, { useEffect, useState } from "react";
import "../Cart/Cart.css";
// import CustomNavbar from "../Navbar";
import Footer from "../Footer";
const Mycart = () => {
  const [cartItem, setCartItem] = useState();
  const [Total, setTotal] = useState(0);
  let price = [];
  let totalPrice = [];
  let tp = 0;
  useEffect(() => {
    setCartItem(JSON.parse(sessionStorage.getItem("mycart")));
    let CartData = JSON.parse(sessionStorage.getItem("mycart"));
    CartData.map((v, i) => {
      totalPrice.push(v["price"]);
    });
    totalPrice.map((v, i) => {
      tp = tp + v;
    });
    setTotal(tp);
  }, [removeItemOnce]);
  // console.log(price)
  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return sessionStorage.setItem("mycart", JSON.stringify(arr));
  }

  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row ">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>

                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItem
                      ? cartItem.map((v, i) => {
                          return (
                            <tr>
                              <td className="product-thumbnail">
                                <img
                                  src={v.image}
                                  alt="Image"
                                  className="img-fluid"
                                  style={{ height: "150px", width: "200px" }}
                                />
                              </td>
                              <td className="product-name">
                                <h2 className="h5 text-black">{v.name}</h2>
                              </td>

                              <td>${v.price}</td>
                              <td>
                                <button
                                  className=" btn btn-outline-dark btn-light"
                                  onClick={(e) => {
                                    removeItemOnce(cartItem, v);
                                  }}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-outline-dark">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${Total}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-outline-dark btn-light btn-lg py-3 btn-block"
                        onclick="window.location='checkout.html'"
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
      </div>
      <Footer />
    </>
  );
};

export default Mycart;
