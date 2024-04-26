export default function Extra1() {
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5 ">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        User Register
                      </p>

                      <form
                        className="row g-3"
                        method="POST"
                        // onSubmit={handleSubmit}
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
                            // onChange={handleForm}
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
                            // onChange={handleForm}
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
                              //   onChange={handleForm}
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
                              //   onChange={handleForm}
                            />
                            <div className="invalid-feedback">
                              Please enter a valid mobile number!
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <label
                              htmlFor="yourUsername"
                              className="form-label"
                            >
                              Username
                            </label>
                            <div className="input-group has-validation">
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="yourUsername"
                                // onChange={handleForm}
                              />
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              //   onChange={handleForm}
                              autoComplete="admin"
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
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
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account?{" "}
                            <a href="pages-login.html">Log in</a>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="images/login.jpeg"
                        class="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
