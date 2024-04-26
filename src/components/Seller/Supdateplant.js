import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";

export default function Supdateplant() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/fetchData").then((response) => {
      // console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  const handleUpdate = (updatedProduct) => {
    axios
      .post("http://localhost:8080/updateData", updatedProduct)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        // You can add any additional logic here after successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  // const handleDelete = (productId) => {
  //   axios
  //     .post(`http://localhost:8080/deleteData`, { id: productId })
  //     .then((response) => {
  //       console.log("Data deleted successfully:", response.data);
  //       // You can add any additional logic here after successful delete
  //       // For example, you may want to remove the deleted product from the UI
  //       setProduct(product.filter((item) => item.id !== productId));
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting data:", error);
  //     });
  // };

  const handleNameChange = (index, newName) => {
    const updatedProducts = [...product];
    updatedProducts[index].plantname = newName;
    setProduct(updatedProducts);
  };

  const handlePriceChange = (index, newPrice) => {
    const updatedProducts = [...product];
    updatedProducts[index].plantprice = newPrice;
    setProduct(updatedProducts);
  };

  return (
    <>
      <Ssidebar />
      <div id="content">
        <div className="container">
          <Sheader />
          <div className="row my-4">
            <div className="container">
              <div className="row mt-3 mb-5">
                {product.map((val, index) => (
                  <div className="col-3 my-3" key={index}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={val.plantimage}
                        alt="Title"
                        style={{ height: "16rem", width: "100%" }}
                      />
                      <div className="card-body">
                        <input
                          type="text"
                          className="form-control"
                          value={val.plantname}
                          onChange={(e) =>
                            handleNameChange(index, e.target.value)
                          }
                        />
                        <input
                          type="text"
                          className="form-control"
                          value={val.plantprice}
                          onChange={(e) =>
                            handlePriceChange(index, e.target.value)
                          }
                        />
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handleUpdate({
                              id: val._id,
                              plantname: val.plantname,
                              plantprice: val.plantprice,
                            })
                          }
                        >
                          Update
                        </button>
                        &nbsp;
                        {/* <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(val._id)}
                        >
                          Delete
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
