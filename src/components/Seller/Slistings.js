import "./navbar.css";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Slistings() {
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
  const handleDelete = (productId) => {
    axios
      .post(`http://localhost:8080/deleteData`, { id: productId })
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
        // You can add any additional logic here after successful delete
        // For example, you may want to remove the deleted product from the UI
        setProduct(product.filter((item) => item.id !== productId));
        navigate("/Slistings");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };
  return (
    <>
      <Ssidebar />
      <div id="content">
        <div class="container">
          <Sheader />
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((val, index) => {
                      return (
                        <tr>
                          <td class="product-thumbnail">
                            <img
                              src={val.plantimage}
                              alt="img"
                              class="img-fluid"
                              style={{ width: "100%", height: "100%" }}
                            />
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">{val.plantname}</h2>
                          </td>
                          <td>${val.plantprice}</td>
                          <td>
                            <form method="post">
                              <button
                                class="btn btn-black btn-sm"
                                onClick={() => handleDelete(val._id)}
                              >
                                X
                              </button>
                            </form>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
