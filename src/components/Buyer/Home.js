// import $ from "jquery";
// import { Link } from "react-router-dom";
// import Bcart from "./Bcart";
// import Navbar from "./Navbar";
// import Blogin from "./Blogin";
// import Bregister from "./Bregister";
// import Bfooter from "./Bfooter";
export default function Home() {
  // $("#home").show();
  // $("#page1").hide();
  // $("#page2").hide();
  // const handleCart = () => {
  //   $("#home").hide();
  //   $("#page1").show();
  //   $("#page2").hide();
  // };
  // const handleLogin = () => {
  //   $("#home").hide();
  //   $("#page1").hide();
  //   $("#page2").show();
  // };
  return (
    <>
      <div id="home">
        <header
          style={{ marginBottom: "2%" }}
          id="header"
          class="fixed nav-down"
        >
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
                    <a href="/" data-effect="Home" class="nav-link">
                      Home
                    </a>
                  </li>
                  {/* <li class="menu-item">
                    <a href="#about" data-effect="about" class="nav-link">
                      About
                    </a>
                  </li> */}
                  <li class="menu-item">
                    <a href="/Sdashboard" data-effect="shop" class="nav-link">
                      Shop
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="#latest-blog"
                      data-effect="latest-blog"
                      class="nav-link"
                    >
                      Blog
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="#why-us"
                      data-effect="latest-blog"
                      class="nav-link"
                    >
                      Why us
                    </a>
                  </li>
                </ul>
              </div>

              <div class="right-element icon-element">
                <div class="search-bar">
                  <a
                    href="*"
                    class="search-button search-toggle"
                    data-selector="#header-wrap"
                  >
                    <i class="bi bi-search"></i>
                  </a>
                  <form role="search" method="get" class="search-box">
                    <input
                      class="search-field text search-input"
                      placeholder="Search"
                      type="search"
                    />
                  </form>
                </div>

                <div class="user-account for-buy">
                  <a href="/login">
                    <i
                      class="bi bi-person-circle"
                      // onClick={handleLogin}
                    >
                      <link to="login"></link>
                    </i>
                  </a>
                </div>

                <div class="cart for-buy">
                  <a href="/cartpage">
                    <i
                      class="bi bi-cart-check"
                      // onClick={handleCart}
                    >
                      {/* <link to="cart"></link> */}
                    </i>
                  </a>
                </div>
              </div>
              {/* <!--right-element--> */}
            </nav>
          </div>
          {/* <!--header-wrap--> */}
        </header>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/plant1.jpg"
                className="d-block w-100 h-80"
                alt="car1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/plant2.jpg"
                className="d-block w-100"
                alt="car2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/plant3.jpg"
                className="d-block w-100"
                alt="car3"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section id="about" class="scrollspy-section margin-xlarge">
          <div class="container">
            <div class="row">
              <div class="col-md-6 video-content">
                <div class="video-player">
                  <a id="video-item" href="*">
                    <i class="icon icon-youtube-player"></i>
                    <img
                      src="images/images/video-item.png"
                      alt="video"
                      class="video-image"
                    />
                  </a>
                </div>
              </div>
              {/* <!--video-content--> */}

              <div class="col-md-5 description">
                <div class="section-header">
                  <h2 class="section-title">Our journey</h2>
                </div>

                <p>
                  Quis eleifend orci nunc, blandit massa, vitae. Dui nulla augue
                  in id enim non. Venenatis aenean suscipit facilisis amet.
                  Pellentesque nullam mi vitae neque ipsum. Quis in vitae est eu
                  pulvinar sed. Netus lorem sit turpis tristique pharetra sit.
                  Tortor ornare libero semper cursus. Mollis erat augue egestas
                  laoreet est auctor.
                </p>
                <p>
                  Dui nulla augue in id enim non. Venenatis aenean suscipit
                  facilisis amet. Pellentesque nullam mi vitae neque ipsum. Sem
                  magna ut pharetra vitae duis eu senectus sem risus. Morbi non,
                  semper vestibulum euismod accumsan augue.
                </p>

                <div class="btn-wrap">
                  <a href="*" class="btn btn-black btn-xlarge btn-rounded">
                    Read More
                    <i class="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="fresh-arrivals"
          class="herb-items scrollspy-section margin-xlarge"
        >
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Fresh arrivals</h2>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item4.jpg"
                        alt="plant"
                        class="image-product"
                      />

                      <div class="like-bar">
                        <a href="*">
                          <i class="icon icon-like-button"></i>
                          <i class="icon icon-liked-button"></i>
                        </a>
                      </div>
                      {/* <!--like-bar--> */}
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                        <i class="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="single-product.html">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--new-product-item--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item5.jpg"
                        alt="plant"
                        class="image-product"
                      />
                      <i class="icon icon-like-button"></i>
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                        <i class="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="single-product.html">Calathea White Fusion</a>
                    </h3>
                    <div class="product-price">$ 25.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item6.jpg"
                        alt="plant"
                        class="image-product"
                      />
                      <i class="icon icon-like-button"></i>
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                        <i class="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="single-product.html">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item7.jpg"
                        alt="plant"
                        class="image-product"
                      />
                      <i class="icon icon-like-button"></i>
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                        <i class="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="single-product.html">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="btn-wrap align-center margin-small">
                <a href="/product" class="btn btn-black btn-xlarge btn-rounded">
                  See All
                  <i class="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" class="scrollspy-section bg-accent padding-xlarge">
          <div class="container">
            <div class="row">
              <div class="col-md-6 left-column">
                <div class="section-header">
                  <h2 class="section-title">Why shop with us?</h2>
                </div>
                <div class="expertize">
                  <p>
                    Dui nulla augue in id enim non. Venenatis aenean suscipit
                    facilisis amet. Pellentesque nullam mi vitae neque ipsum.
                    Sem magna ut pharetra vitae duis eu senectus sem risus.
                    Morbi non, semper vestibulum euismod accumsan augue.
                  </p>
                  <ul>
                    <li>
                      <span class="list-number">1.</span>
                      <div class="list-title">
                        <h4>Socculents</h4>
                        <p>At in proin consequat ut cursus venenatis sapien.</p>
                      </div>
                    </li>
                    <li>
                      <span class="list-number">2.</span>
                      <div class="list-title">
                        <h4>Air purifiers</h4>
                        <p>At in proin consequat ut cursus venenatis sapien.</p>
                      </div>
                    </li>
                    <li>
                      <span class="list-number">3.</span>
                      <div class="list-title">
                        <h4>Decorative</h4>
                        <p>At in proin consequat ut cursus venenatis sapien.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-6 right-column">
                <figure class="single-image-holder">
                  <img src="images/images/plant-item15.png" alt="plant_image" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          id="popular-items"
          class="herb-items scrollspy-section margin-xlarge"
        >
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Popular items</h2>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item14.jpg"
                        alt="plant"
                        class="image-product"
                      />
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="*">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item11.jpg"
                        alt="plant"
                        class="image-product"
                      />
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="*">Calathea White Fusion</a>
                    </h3>
                    <div class="product-price">$ 25.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item12.jpg"
                        alt="plant"
                        class="image-product"
                      />
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="*">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="col-md-3">
                <div class="product-list">
                  <div class="product-item">
                    <div class="image-holder">
                      <img
                        src="images/images/plant-item13.jpg"
                        alt="plant"
                        class="image-product"
                      />
                    </div>
                    <div class="product-inner">
                      <a class="add-to-cart" href="*" target="_self">
                        <span class="cart-text">Add to cart</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-content">
                    <h3 class="product-title">
                      <a href="*">Chinese Money Plant</a>
                    </h3>
                    <div class="product-price">$ 23.00</div>
                  </div>
                </div>
                {/* <!--product-list--> */}
              </div>

              <div class="btn-wrap align-center margin-small">
                <a
                  href="shop.html"
                  class="btn btn-black btn-xlarge btn-rounded"
                >
                  Shop All
                  <i class="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-blog" class="scrollspy-section margin-xlarge">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Latest Blog Posts</h2>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="post-grid">
                  <div class="row">
                    <div class="col-md-4">
                      <article class="post-item">
                        <figure>
                          <a href="*" class="image-hvr-effect">
                            <img
                              src="images/images/post-item15.jpg"
                              alt="post"
                              class="post-image"
                            />
                          </a>
                        </figure>

                        <div class="post-content">
                          <h3 class="post-title">
                            <a href="*">Decorative touches for your design</a>
                          </h3>
                          <p>
                            Sem magna ut pharetra vitae duis eu senectus sem
                            risus. Morbi non, semper vestibulum euismod
                            accumsan...
                          </p>
                        </div>
                      </article>
                    </div>

                    <div class="col-md-4">
                      <article class="post-item">
                        <figure>
                          <a href="*" class="image-hvr-effect">
                            <img
                              src="images/images/post-item16.jpg"
                              alt="post"
                              class="post-image"
                            />
                          </a>
                        </figure>
                        <div class="post-content">
                          <h3 class="post-title">
                            <a href="*">
                              Giftable scents which warms the heart
                            </a>
                          </h3>
                          <p>
                            Morbi non, semper vestibulum euismod accumsan. Sem
                            magna ut pharetra vitae duis eu senectus sem
                            risus...
                          </p>
                        </div>
                      </article>
                    </div>

                    <div class="col-md-4">
                      <article class="post-item">
                        <figure>
                          <a href="*" class="image-hvr-effect">
                            <img
                              src="images/images/post-item17.jpg"
                              alt="post"
                              class="post-image"
                            />
                          </a>
                        </figure>
                        <div class="post-content">
                          <h3 class="post-title">
                            <a href="*">
                              Creative ideas to make this holiday special
                            </a>
                          </h3>
                          <p>
                            Pharetra vitae sem magna ut duis eu senectus sem
                            risus. Morbi non, semper vestibulum euismod
                            accumsan.
                          </p>
                        </div>
                      </article>
                    </div>

                    <div class="btn-wrap align-center">
                      <a
                        href="blog.html"
                        class="btn btn-black btn-xlarge btn-rounded"
                      >
                        More Blog
                        <i class="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" class="scrollspy-section margin-xlarge">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <figure class="testimonial-image">
                  <img src="images/images/review-image.png" alt="review" />
                </figure>
              </div>

              <div class="col-md-6">
                <div class="swiper testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden fs-6">
                  <div
                    class="swiper-wrapper"
                    id="swiper-wrapper-2b6d358a0b4be96c"
                    aria-live="polite"
                  >
                    <div
                      class="testimonial-item swiper-slide swiper-slide-next"
                      role="group"
                      aria-label="2 / 3"
                      style={{ width: "448px" }}
                    >
                      <div class="testimonials-inner">
                        <q>
                          At the core of our practice is the idea that cities
                          are the incubators of our greatest achievements, and
                          the best hope for a sustainable future.
                        </q>
                        <div class="testimonial-author">
                          <div class="author-detail">
                            <div class="name">John Logan</div>
                            <div class="author-title">By Customer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--testimonial-item--> */}

                    <div
                      class="testimonial-item swiper-slide"
                      role="group"
                      aria-label="3 / 3"
                      style={{ width: "448px" }}
                    >
                      <div class="testimonials-inner">
                        <q>
                          Our practice is the idea that cities are the
                          incubators of our greatest achievements, and the best
                          hope for a sustainable future.
                        </q>
                        <div class="testimonial-author">
                          <div class="author-detail">
                            <div class="name">Mike Smith</div>
                            <div class="author-title">By Customer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--testimonial-item--> */}
                  </div>

                  <div class="button-container">
                    <div
                      class="swiper-button-prev icon icon-arrow-left swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-2b6d358a0b4be96c"
                      aria-disabled="true"
                    ></div>
                    <div
                      class="swiper-button-next icon icon-arrow-right"
                      tabindex="0"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-2b6d358a0b4be96c"
                      aria-disabled="false"
                    ></div>
                  </div>

                  <span
                    class="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="services-item">
                  <i class="bi bi-cart-check-fill fs-1"></i>
                  <div class="services-content">
                    <div class="services-title">Free Shipping</div>
                    <p>Capped at $319 per order</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="services-item">
                  <i class="bi bi-credit-card fs-1"></i>
                  <div class="services-content">
                    <div class="services-title">Safe Payment</div>
                    <p>With our payment gateway</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="services-item">
                  <i class="bi bi-person-fill-lock fs-1"></i>
                  <div class="services-content">
                    <div class="services-title">Quality Guarantee</div>
                    <p>Fresh &amp; Super item available</p>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="services-item">
                  <i class="bi bi-tags-fill fs-1"></i>
                  <div class="services-content">
                    <div class="services-title">Big Offers</div>
                    <p>We give best offers surely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" class="bg-accent padding-xlarge">
          <div class="container">
            <div class="row">
              <div class="col-md-3 footer-intro">
                <div class="footer-menu">
                  <img
                    src="images/images/logo.png"
                    alt="logo"
                    class="footer-logo"
                  />
                  <p>
                    Sem magna ut pharetra vitae duis eu senectus sem risus.
                    Morbi non, semper vestibulum euismod accumsan augue.
                  </p>

                  <div class="form-content">
                    <form>
                      <input
                        type="text"
                        name="email"
                        placeholder="enter your email address"
                      />
                      <button class="btn btn-black">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-md-2">
                <div class="footer-menu">
                  <h5>Company</h5>
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a href="*">About</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Our Plantations</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Our vision</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Installations</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Refer a friend</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-2">
                <div class="footer-menu">
                  <h5>Support</h5>
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a href="*">Customer FAQs</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Shipping &amp; Returns</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Contact Us</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Plant Care Tips</a>
                    </li>
                    <li class="menu-item">
                      <a href="*">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3">
                <div class="footer-menu">
                  <h5>Contact Us</h5>
                  <ul class="menu-list">
                    <li class="menu-item">Street Avenue 487, New York, USA</li>
                    <li class="menu-item">+333 346 364 366</li>
                    <li class="menu-item">
                      <a href="*" class="mail-id">
                        info@templatesjungle.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div id="footer-bottom" class="bg-accent padding-medium">
          <div class="container">
            <div class="row">
              <div class="col-md-12 footer-links">
                <div class="copyright">
                  <p>
                    © 2021 TemplatesJungle. Designed by{" "}
                    <a href="*" target="_blank">
                      TemplatesJungle
                    </a>
                  </p>
                </div>
                <div class="social-links">
                  <p>Social Links:</p>
                  <ul>
                    <li>
                      <i class="icon icon-facebook"></i>
                    </li>
                    <li>
                      <i class="icon icon-twitter"></i>
                    </li>
                    <li>
                      <i class="icon icon-behance"></i>
                    </li>
                    <li>
                      <i class="icon icon-youtube-play"></i>
                    </li>
                    <li>
                      <i class="icon icon-pinterest"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="page1">
        <Navbar />
        <Bcart />
        <Bfooter />
      </div>
      <div id="page2">
        <Navbar />
        <Blogin />
        <Bfooter />
      </div> */}
    </>
  );
}
