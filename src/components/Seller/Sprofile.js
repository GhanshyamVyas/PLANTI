import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./navbar.css";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";
import axios from "axios";
export default function Sprofile() {
  let userData = JSON.parse(sessionStorage.getItem("User"));
  // console.log(userData);
  // const [form, setForm] = useState(userData.data);
  // console.log(form);
  // const handleForm = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  const [form, setForm] = useState({});

  // const navigate = useNavigate();
  // window.addEventListener("load", async (e) => {
  //   console.log("page is fully loaded");
  //   console.log(userData);
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8080/profile", {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:8080/profile", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    axios
      .post("http://localhost:8080/profile", { id: userData.data._id, form })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("User", JSON.stringify(res.data));
      });
    // const data = await response.json();
    // console.log(data);
  };
  useEffect(() => {
    // axios.get("http://localhost:8080/profile")
    //   .then(e => { console.log(e.data) })
    console.log(userData.data);
    setForm({
      firstname: userData.data[0].firstname,
      lastname: userData.data[0].lastname,
      emailaddress: userData.data[0].emailaddress,
      mobilenumber: userData.data[0].mobilenumber,
      username: userData.data[0].username,
      password: userData.data[0].password,
    });
  }, []);
  return (
    <>
      <Ssidebar />
      <div id="content">
        <div class="container">
          <Sheader />
          <div className="row">
            <div className="container">
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="pt-4 pb-2">
                        <h2 class="card-title text-center pb-0 fs-4">
                          Your Profile
                        </h2>
                      </div>
                      <form
                        class="mx-3 g-3"
                        method="POST"
                        onSubmit={handleSubmit}
                      >
                        <div class="row">
                          <label for="fname" class="form-label">
                            Your First Name
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="firstname"
                            class="form-control"
                            id="fname"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                ["firstname"]: e.target.value,
                              })
                            }
                            value={form.firstname}
                          />
                        </div>
                        {/* <div class="invalid-feedback">
                            Please, enter your first name!
                          </div> */}
                        <div class="row">
                          <label for="lname" class="form-label">
                            Your Last Name
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="lastname"
                            class="form-control"
                            id="lname"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({ ...form, ["lastname"]: e.target.value })
                            }
                            value={form.lastname}
                          />
                        </div>
                        {/* <div class="invalid-feedback">
                            Please, enter your last name!
                          </div> */}
                        <div class="row">
                          <label for="yourEmail" class="form-label">
                            Your Email
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="email"
                            name="emailaddress"
                            class="form-control"
                            id="yourEmail"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                ["emailaddress"]: e.target.value,
                              })
                            }
                            value={form.emailaddress}
                          />
                          {/* <div class="invalid-feedback">
                              Please enter a valid Email adddress!
                            </div> */}
                        </div>
                        <div class="row">
                          <label for="mnumber" class="form-label">
                            Your Mobile No.
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="number"
                            name="mobilenumber"
                            class="form-control"
                            id="mnumber"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                ["mobilenumber"]: e.target.value,
                              })
                            }
                            value={form.mobilenumber}
                          />
                        </div>
                        {/* <div class="invalid-feedback">
                              Please enter a valid mobile number!
                            </div> */}
                        <div class="row">
                          <label for="yourUsername" class="form-label">
                            Username
                          </label>
                        </div>
                        <div className="row">
                          <input
                            type="text"
                            name="username"
                            class="form-control w-100"
                            id="yourUsername"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({ ...form, ["username"]: e.target.value })
                            }
                            value={form.username}
                          />
                          {/* <div class="invalid-feedback">
                                Please choose a username.
                              </div> */}
                        </div>
                        <div class="row mb-3">
                          <label for="yourPassword" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="yourPassword"
                            autocomplete="admin"
                            // onChange={handleForm}
                            onChange={(e) =>
                              setForm({ ...form, ["password"]: e.target.value })
                            }
                            value={form.password}
                          />
                          {/* <div class="invalid-feedback">
                              Please enter your password!
                            </div> */}
                        </div>
                        {/* <div class="row">
                          <div class="col-12">
                            <label for="utype" class="form-label">
                              User Type
                            </label>
                            <div class="input-group has-validation">
                              <select
                                name="utype"
                                id="utype"
                                class="form-select"
                              >
                                <option value="Select an Option">
                                  Select an Option
                                </option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                              </select>
                              <div class="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div class="row">
                          <div class="col-12">
                            <div class="form-check d-flex justify-content-center mt-2">
                              <div style={{ display: "flex" }}>
                                <input
                                  class="form-check-input"
                                  name="terms"
                                  type="checkbox"
                                  id="acceptTerms"
                                  value=""
                                />
                                <label
                                  class="form-check-label ps-2"
                                  for="acceptTerms"
                                >
                                  I agree and accept the{" "}
                                  <a href="*">terms and conditions</a>
                                </label>
                              </div>
                              <div class="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">
                            Update Profile
                          </button>
                        </div>
                        {/* <div class="col-12">
                          <p class="small mb-0">
                            Already have an account? <a href="/login">Log in</a>
                          </p>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
