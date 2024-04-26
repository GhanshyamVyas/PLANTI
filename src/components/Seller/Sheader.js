import axios from "axios";
import { useEffect } from "react";

export default function Sheader() {
  let userData = JSON.parse(sessionStorage.getItem("User"));
  console.log(userData);
  useEffect(() => {
    axios.get("http://localhost:8080/fetchUserdata").then((e) => {
      console.log(e);
      sessionStorage.setItem("User", JSON.stringify(e));
    });
  }, []);
  return (
    <>
      <div class="row mx-3 mynav">
        <div class="col-6">
          <h3>
            <b> Welcome To Planti </b>
          </h3>
          <p>
            Hello, {userData.data[0].firstname} {userData.data[0].lastname}
          </p>
        </div>
        {/* <div class="input-icons col-3 my-3 search">
              <i class="fa fa-search pe-2" aria-hidden="true"></i>
              search
            </div>
            <div class="col-1"></div>
            <div class="col-1"></div>
            <div class="col-1"></div> */}
      </div>
    </>
  );
}
