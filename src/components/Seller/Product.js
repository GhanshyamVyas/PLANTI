import React from "react";
import Ssidear from "./Ssidebar";
import Sheader from "./Sheader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const [uname, setUname] = useState({});
  const [product, setProduct] = useState([]);
  // const [cartItem,setCartItem] = useState([])
  let cartItem = [];
  const navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem("User"));
  useEffect(() => {
    console.log(userData.data.username);
    setUname(userData.data.username);
    axios.get("http://localhost:8080/fetchData").then((e) => {
      console.log(e.data);
      setProduct(e.data);
    });
  }, []);
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("cart")).length);
    // cartItem.push()
    var tempArr = JSON.parse(localStorage.getItem("cart"));
    // var i = 0
    // while (i === (JSON.parse(localStorage.getItem("cart")).length - 1)) {
    //     tempArr[i]
    // }
    // setUname(userData.data.username)
    // setProduct(...Product, JSON.parse(sessionStorage.getItem("cart")))
    cartItem = [...cartItem, JSON.parse(localStorage.getItem("cart"))];
    // axios.get('http://localhost:8080/fetchData').then(e => { console.log(e.data); setProduct(e.data) })
  }, []);
  const addToCart = (val) => {
    for (let i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {
      // console.log();
      cartItem.push(JSON.parse(localStorage.getItem("cart"))[i]);
    }
    cartItem.push(val);
    // cartItem = [...cartItem, val]
    cartItem.filter((e) => e !== val);
    function removeDuplicates(array, key) {
      return array.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t[key] === obj[key])
      );
    }
    let AllCartItem = removeDuplicates(cartItem, "_id");
    let cartStr = JSON.stringify(AllCartItem);
    localStorage.setItem("cart", cartStr);
    console.log(AllCartItem);

    // console.log(cartItem)
  };

  return (
    <div>
      <Ssidear username={uname} />
      <div id="content">
        <div class="container">
          <Sheader />
          <div class="row">
            <div className="row mt-3 mb-5">
              {product.map((val, index) => {
                return (
                  <div class="col-3" key={index}>
                    <div class="card">
                      <img
                        class=""
                        src={val.plantimage}
                        alt="Title"
                        style={{ height: "16rem", width: "200px" }}
                      />
                      <div class="card-body">
                        <h4 class="card-title">{val.plantname}</h4>
                        <p class="card-text">RS. {val.plantprice}</p>
                        <button
                          className="btn btn-dark"
                          onClick={(e) => addToCart(val)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
