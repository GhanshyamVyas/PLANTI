export default function Bnavbar() {
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
                  <div
                    data-effect="Home"
                    class="nav-link"
                    //   onClick={handleHome}
                  >
                    Home
                  </div>
                </li>
                <li class="menu-item">
                  <div
                    data-effect="about"
                    class="nav-link"
                    // onClick={handleLogin}
                  >
                    Login
                  </div>
                </li>
                <li class="menu-item">
                  <div
                    data-effect="shop"
                    class="nav-link"
                    // onClick={handleRegister}
                  >
                    Register
                  </div>
                </li>
              </ul>
            </div>
            <div class="right-element icon-element">
              <div class="cart for-buy">
                <div>
                  <i
                    class="bi bi-cart-check"
                    //   onClick={handleCart}
                  ></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
