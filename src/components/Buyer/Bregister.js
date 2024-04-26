import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import Bfooter from "./Bfooter";
import axios from "axios";
export default function Bregister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  // const [users, setUsers] = useState([]);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:8080/register", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    axios.post("http://localhost:8080/register", { form }).then((e) => {
      console.log(e.data.msg);
    });
    // const data = await response.json();
    // console.log(data);
    navigate("/login");
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
      {/* <div>
        <ol>
          {users.map((user) => (
            <li key={user._id}>
              {user.fname} {user.lname}
            </li>
          ))}
        </ol>
      </div> */}
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
      <section className="section register d-flex flex-column align-items-center justify-content-center my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                    <p className="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>
                  <form
                    className="row g-3"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-6">
                      <label htmlFor="fname" className="form-label">
                        Your First Name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        onChange={handleForm}
                      />
                      <div className="invalid-feedback">
                        Please, enter your first name!
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="lname" className="form-label">
                        Your Last Name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        onChange={handleForm}
                      />
                      <div className="invalid-feedback">
                        Please, enter your last name!
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          onChange={handleForm}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid Email adddress!
                        </div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="mnumber" className="form-label">
                          Your Mobile No.
                        </label>
                        <input
                          type="number"
                          name="mnumber"
                          className="form-control"
                          id="mnumber"
                          onChange={handleForm}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid mobile number!
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
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
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
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
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="utype" className="form-label">
                          User Type
                        </label>
                        <div className="input-group has-validation">
                          <select
                            name="utype"
                            id="utype"
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
                              name="terms"
                              type="checkbox"
                              value=""
                              id="acceptTerms"
                            />
                            <label
                              className="form-check-label ps-2"
                              htmlFor="acceptTerms"
                            >
                              I agree and accept the{" "}
                              <a href="*">terms and conditions</a>
                            </label>
                          </div>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <a href="/login">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </a>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account? <a href="/login">Log in</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bfooter />
    </>
  );
}
