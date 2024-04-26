import "./bootstrap.min.css";
import "./style.css";
import "./tiny-slider.css";
import Bfooter from "./Bfooter";
export default function Bcart() {
  <script>document.write(new Date().getFullYear());</script>;
  return (
    <>
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
              </ul>
            </div>
            <div class="right-element icon-element">
              <div class="cart for-buy">
                <a href="/cart">
                  <i
                    class="bi bi-cart-check"
                    //   onClick={handleCart}
                  >
                    <link to="/cart"></link>
                  </i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div class="my-5">
        <div class="container">
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-total">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-thumbnail">
                        <img
                          src="images/plant1.jpg"
                          alt="img"
                          class="img-fluid"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </td>
                      <td class="product-name">
                        <h2 class="h5 text-black">Product 1</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
                        <div
                          class="input-group mb-3 d-flex align-items-center quantity-container"
                          style={{ maxWidth: "120px" }}
                        >
                          <div class="input-group-prepend">
                            <button
                              class="btn btn-outline-black decrease"
                              type="button"
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
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>$98.00</td>
                      <td>
                        <a href="*" class="btn btn-black btn-sm">
                          X
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="product-thumbnail">
                        <img
                          src="images/plant2.jpg"
                          alt="img"
                          class="img-fluid"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </td>
                      <td class="product-name">
                        <h2 class="h5 text-black">Product 2</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
                        <div
                          class="input-group mb-3 d-flex align-items-center quantity-container"
                          style={{ maxWidth: "120px" }}
                        >
                          <div class="input-group-prepend">
                            <button
                              class="btn btn-outline-black decrease"
                              type="button"
                            >
                              -
                            </button>
                          </div>
                          <input
                            type="text"
                            class="form-control text-center quantity-amount"
                            value="1"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-black increase"
                              type="button"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>$49.00</td>
                      <td>
                        <a href="*" class="btn btn-black btn-sm">
                          X
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row mb-5">
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
                </div>
              </div>
              <div class="row">
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
                      <strong class="text-black">$147.00</strong>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <span class="text-black">Total</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">$147.00</strong>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-dark px-5"
                        onclick="window.location='checkout.html'"
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
      </div>
      <Bfooter />
    </>
  );
}
