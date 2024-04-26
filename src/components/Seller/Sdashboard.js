import "./navbar.css";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Sdashboard() {
  const [uname, setUname] = useState({});
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem("User"));
  useEffect(() => {
    console.log(userData.data.username);
    setUname(userData.data.username);
    axios.get("http://localhost:8080/fetchPlantData").then((e) => {
      console.log(e.data);
      setProduct(e.data);
    });
  }, []);
  // window.addEventListener("load", async (e) => {
  //   console.log("page is fully loaded");
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8080/login", {
  //     method: "POST",
  //     // body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   setUname(data.uname);
  //   console.log(data);
  // });
  return (
    <>
      <Ssidebar username={uname} />
      <div id="content">
        <div class="container">
          <Sheader />
          <div class="row">
            <div class="col-8">
              <div
                class="my-4 mx-4 headphoto1"
                style={{
                  backgroundImage: "url(images/download.jpg)",
                  width: "90%",
                  height: "75%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRSadius: "10px",
                }}
              >
                <div class="p-4 headphotodiv text-light">
                  <div class="mb-4">
                    <h3>Create and sell Extraordinary Plants.</h3>
                    <p>
                      The World's first and largest handmade plants marketplace.
                    </p>
                  </div>
                  <button class="btn btn-outline-light mx-3">
                    Explore More
                  </button>
                  <button class="btn btn-outline-light mx-3">
                    Top Sellers
                  </button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div
                class="my-4 mx-4 headphoto2"
                style={{
                  backgroundImage: "url(images/download1.jpg)",
                  float: "right",
                  width: "100%",
                  height: "75%",
                  color: "black",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRSadius: "10px",
                }}
              >
                <h5 class="ps-3 pt-3">
                  <b>My Stats : </b>
                </h5>
                <div class="ms-3">
                  <p>Today : 4 Orders</p>
                  <p>This Month : 120 Orders</p>
                </div>
                <p class="p-4">
                  <b>
                    <u> Go to check Orders </u>
                  </b>
                </p>
              </div>
            </div>
            {/* <div className="row">
              <div class="col mx-4">
                <div class="card">
                  <img
                    class="card-img-bottom"
                    src="holder.js/100x180/"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-bottom"
                    src="holder.js/100x180/"
                    alt="Title"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div class="row">
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/plant1.jpg"
                    alt="Title"
                    style={{ height: "16rem" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Plant 1</h4>
                    <p class="card-text">RS. 100</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/plant2.jpg"
                    alt="Title"
                    style={{ height: "16rem" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Plant 2</h4>
                    <p class="card-text">RS. 100</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/plant3.jpg"
                    alt="Title"
                    style={{ height: "16rem" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Plant 3</h4>
                    <p class="card-text">RS. 100</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row mt-3 mb-5">
              {product.map((val, index) => {
                return (
                  <div class="col-3 my-3">
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
