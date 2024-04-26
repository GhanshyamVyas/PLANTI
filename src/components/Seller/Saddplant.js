import react, { useState } from "react";
import axios from "axios";
import "./navbar.css";
import Ssidebar from "./Ssidebar";
import Sheader from "./Sheader";
import { useNavigate } from "react-router-dom";
export default function Slistings() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [imagestring, setimagestring] = useState("");
  const [file, setFile] = useState();
  const [fileString, setFileString] = useState();
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.onloadend = () => {
      setFileString(render.result);
    };
    if (file) {
      render.readAsDataURL(file);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios
        .post("http://localhost:8080/addplants", { form, fileString })
        .then((e) => {
          console.log(e.data);
        });
      navigate("/Slistings");
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file");
    }
  };

  // file handling (converting into base64 encoding)
  // const handlefile = (e) => {
  //   e.preventDefault();
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     setimagestring(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     alert(error);
  //   };
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8080/addplants", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.text();

  //   console.log(data);
  // };

  return (
    <>
      <Ssidebar />
      <div id="content">
        <div class="container">
          <Sheader />
          <div className="row my-4">
            <div className="container">
              <form onSubmit={handleSubmit} method="POST">
                <div className="row">
                  <div className="col-5">
                    {/* <p>{JSON.stringify(form)}</p> */}
                    <label className="form-label" htmlFor="plantname">
                      Enter Plant Name :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="plantname"
                      name="pname"
                      onChange={handleForm}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <label className="form-label" htmlFor="plantprice">
                      Enter Plant Price :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="plantprice"
                      name="pprice"
                      onChange={handleForm}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <label className="form-label" htmlFor="plantimage">
                      Select Plant Image :
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="plantimage"
                      name="pimage"
                      onChange={handleFileInput}
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <div className="col-auto">
                    <button type="reset" className="btn btn-primary">
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
