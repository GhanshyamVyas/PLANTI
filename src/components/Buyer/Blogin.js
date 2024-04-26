import { useState } from "react";
// import { Link, redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Bfooter from "./Bfooter";
export default function Blogin() {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const history = useHistory();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    sessionStorage.setItem("User", JSON.stringify(data));
    if (data.isUser) {
      alert("You have loged in.");
      // history.push("/smain");
      navigate("/Sdashboard");
      // return <link to="/smain" />;
    } else {
      alert("You have entered wrong username or password.");
    }
    // console.log(data);
  };
  // const getUsers = async () => {
  //   const response1 = await fetch("http://localhost:8080/demo", {
  //     method: "GET",
  //   });
  //   const data = await response1.json();
  //   setUsers(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);
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
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your username & password to login
                        </p>
                      </div>
                      <form
                        // method="POST"
                        className="row g-3 needs-validation"
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              onChange={handleForm}
                              autoComplete="admin"
                            />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            onChange={handleForm}
                            autoComplete="admin"
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <label htmlFor="utype" className="form-label">
                              User Type
                            </label>
                            <div className="input-group has-validation">
                              <select
                                name="usertype"
                                id="usertype"
                                class="form-select"
                                onChange={handleForm}
                              >
                                <option value="Select an Option" selected>
                                  Select an Option
                                </option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                              </select>
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-check d-flex justify-content-center mt-2">
                              <div style={{ display: "flex", flex: "center" }}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="remember"
                                  value="true"
                                  id="rememberMe"
                                  autoComplete="false"
                                />
                                <label
                                  className="form-check-label ps-2"
                                  htmlFor="rememberMe"
                                >
                                  Remember me
                                </label>{" "}
                              </div>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            // onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?{" "}
                            <a href="/register">Create an account</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Bfooter />
    </>
  );
}
