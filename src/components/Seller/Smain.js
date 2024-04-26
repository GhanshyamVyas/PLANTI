// import $ from "jquery";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sdashboard from "./Sdashboard";
// import Sorders from "./Sorders";
// import Slistings from "./Slistings";
// import Saddplant from "./Saddplant";
// import Supdateplant from "./Supdateplant";
// import Sprofile from "./Sprofile";
export default function Smain() {
  // <Router>
  //   <Routes>
  //     <Route path="/smain" element={<Sdashboard />} />
  //     <Route path="/seller/Sorders" element={<Sorders />} />
  //     <Route path="/seller/Slistings" element={<Slistings />} />
  //     <Route path="/seller/Saddplant" element={<Saddplant />} />
  //     <Route path="/seller/Supdateplant" element={<Supdateplant />} />
  //     <Route path="/seller/Sprofile" element={<Sprofile />} />
  //   </Routes>
  // </Router>;
  // $("#page1").show();
  // $("#page2").hide();
  // $("#page3").hide();
  // $("#page4").hide();
  // $("#page5").hide();
  // $("#page6").hide();
  // const handleDashboard = () => {
  //   $("#page1").show();
  //   $("#page2").hide();
  //   $("#page3").hide();
  //   $("#page4").hide();
  //   $("#page5").hide();
  //   $("#page6").hide();
  // };
  // const handleOrders = () => {
  //   $("#page1").hide();
  //   $("#page2").show();
  //   $("#page3").hide();
  //   $("#page4").hide();
  //   $("#page5").hide();
  //   $("#page6").hide();
  // };
  // const handleListings = () => {
  //   $("#page1").hide();
  //   $("#page2").hide();
  //   $("#page3").show();
  //   $("#page4").hide();
  //   $("#page5").hide();
  //   $("#page6").hide();
  // };
  // const handleAddplants = () => {
  //   $("#page1").hide();
  //   $("#page2").hide();
  //   $("#page3").hide();
  //   $("#page4").show();
  //   $("#page5").hide();
  //   $("#page6").hide();
  // };
  // const handleUpdateplants = () => {
  //   $("#page1").hide();
  //   $("#page2").hide();
  //   $("#page3").hide();
  //   $("#page4").hide();
  //   $("#page5").show();
  //   $("#page6").hide();
  // };
  // const handleProfile = () => {
  //   $("#page1").hide();
  //   $("#page2").hide();
  //   $("#page3").hide();
  //   $("#page4").hide();
  //   $("#page5").hide();
  //   $("#page6").show();
  // };
  return (
    <>
      <div class="sidebar">
        <div class="brandname">
          <i class="fa fa-leaf" aria-hidden="true"></i> Planti
        </div>
        <ul class="nav flex-column mx-auto">
          <li class="nav-item">
            <a href="/Sdashboard" class="nav-link">
              <i class="fa fa-dashboard px-3 fs-4" aria-hidden="true"></i>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a href="/Sorders" class="nav-link">
              <i class="fa fa-first-order px-3 fs-4" aria-hidden="true"></i>
              My Orders
            </a>
          </li>
          <li class="nav-item">
            <a href="/Slistings" class="nav-link">
              <i class="fa fa-compass px-3 fs-4" aria-hidden="true"></i>
              Listings
            </a>
          </li>
          <li class="nav-item">
            <a href="/Saddplant" class="nav-link">
              <i class="fa fa-plus-circle px-3 fs-4" aria-hidden="true"></i>
              Add Plants
            </a>
          </li>
          <li class="nav-item">
            <a href="/Supdateplant" class="nav-link">
              <i class="fa fa-upload px-3 fs-4" aria-hidden="true"></i>
              Update Plants
            </a>
          </li>
          <li class="nav-item">
            <a href="/Sprofile" class="nav-link">
              <i class="fa fa-photo px-3 fs-4" aria-hidden="true"></i>
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div id="content">
        <div class="container">
          <div class="row mx-3 mynav">
            <div class="col-6">
              <h3>
                <b> Welcome To Planti </b>
              </h3>
              <p>Hello, Our Guest User</p>
            </div>
            {/* <div class="input-icons col-3 my-3 search">
              <i class="fa fa-search pe-2" aria-hidden="true"></i>
              search
            </div>
            <div class="col-1"></div>
            <div class="col-1"></div>
            <div class="col-1"></div> */}
          </div>
          {/* <div id="page1">
            <Sdashboard />
          </div>
          <div id="page2">
            <Sorders />
          </div>
          <div id="page3">
            <Slistings />
          </div>
          <div id="page4">
            <Saddplant />
          </div>
          <div id="page5">
            <Supdateplant />
          </div>
          <div id="page6">
            <Sprofile />
          </div> */}
        </div>
      </div>
    </>
  );
}
