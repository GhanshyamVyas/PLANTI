//https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4
//For Nodeman start
//Get-ExecutionPolicy -List
//Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { data } = require("jquery");

const server = express();
server.use(cors());
server.use(bodyParser.json());

// mongodb connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://plant1:plant1@atlascluster.kjth2me.mongodb.net/"
  );
  console.log("db connected");
}
// For Plant Table
const plantSchema = new mongoose.Schema({
  plantname: String,
  plantprice: String,
  plantimage: String,
});
const Plant = mongoose.model("Plants", plantSchema);

// For Order Table
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  emailaddress: String,
  mobilenumber: String,
  username: String,
  password: String,
  usertype: String,
});
const User = mongoose.model("Users", userSchema);

// For Plant Table
const orderSchema = new mongoose.Schema({
  pname: String,
  pprice: String,
  pimage: String,
  ostatus: Boolean,
  name: String,
  address: String,
  mnumber: String,
});
const Order = mongoose.model("Orders", orderSchema);

// server.post("/demo", async (req, res) => {
//   //save document in plant table
//   let plant = new Plant();
//   plant.pname = req.body.pname;
//   plant.pprice = req.body.pprice;
//   const doc1 = await plant.save();
//   console.log(doc1);
//   res.json(doc1);

//   //save document in user table
//   let user = new User();
//   user.fname = req.body.fname;
//   user.lname = req.body.lname;
//   user.email = req.body.email;
//   user.mnumber = req.body.mnumber;
//   user.uname = req.body.username;
//   user.pass = req.body.password;
//   const doc2 = await user.save();
//   console.log(doc2);
//   res.json(doc2);
// });

// server.get("/demo", async (req, res) => {
//   const docs = await User.find({});
//   res.json(docs);
// });

server.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, mnumber, username, password, utype } =
      req.body;
    console.log(req.body);
    const user = User.create({
      firstname: fname,
      lastname: lname,
      emailaddress: email,
      mobilenumber: mnumber,
      username: username,
      password: password,
      usertype: utype,
    }).then((e) => {
      res.json({ msg: "data insert" });
    });
    // const user = new User({
    //   firstname: fname,
    //   lastname: lname,
    //   emailaddress: email,
    //   mobilenumber: mnumber,
    //   username: username,
    //   password: password,
    //   usertype: utype,
    // })
    // const doc1 = await user.save().then(e => { console.log(e) })
    // console.log(doc1);
    // res.json(doc1);
    // res.status(201).json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
  }
});

server.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, usertype } = req.body;
    const user = await User.findOne({
      username: username,
      password: password,
      usertype: usertype,
    }).exec();
    console.log(user);
    if (user) {
      console.log("Login Successfull");
      res.json({
        message: "Login Successful",
        data: user,
        isUser: true,
      });
    } else {
      console.log("Login Failed");
      res.json({ message: "Invalid credentials", isUser: false });
    }
  } catch (error) {
    console.log(error);
  }
});

server.post("/order", async (req, res) => {
  try {
    // const { pname, pprice, name, address, mnum } = req.body;
    console.log(req.body);
    const order = Order.create({
      pname: req.body[0].plantname,
      pprice: req.body[0].plantprice,
      pimage: req.body[0].plantimage,
      ostatus: true,
      name: req.body.name,
      address: req.body.address,
      mnumber: req.body.mnum,
    }).then((e) => {
      res.json({ msg: "Order Placed", order });
    });
    // const user = new User({
    //   firstname: fname,
    //   lastname: lname,
    //   emailaddress: email,
    //   mobilenumber: mnumber,
    //   username: username,
    //   password: password,
    //   usertype: utype,
    // })
    // const doc1 = await user.save().then(e => { console.log(e) })
    // console.log(doc1);
    // res.json(doc1);
    // res.status(201).json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
  }
});

server.post("/addplants", async (req, res) => {
  try {
    // const { pname, pprice, pimg } = req.body;
    let pname = req.body.form.pname;
    let pprice = req.body.form.pprice;
    let pimg = req.body.fileString;
    console.log(req.body);
    const plant = await Plant.create({
      plantname: pname,
      plantprice: pprice,
      plantimage: pimg,
    }).then((e) => {
      res.json({ msg: "data insert" });
    });
    // const plant = new Plant({
    //   plantname: pname,
    //   plantprice: pprice,
    //   plantimage: pimg,
    // });
    // const doc2 = await plant.save();
    // console.log(doc2);
  } catch (error) {
    console.log(error);
  }
});

server.get("/fetchData", async (req, res) => {
  const plant = await Plant.find({}).then((e) => {
    res.send(e);
  });
});
server.get("/fetchPlantData", async (req, res) => {
  const plant = await Plant.find({}).then((e) => {
    res.send(e);
  });
});
server.get("/fetchUserData", async (req, res) => {
  const user = await User.find({}).then((e) => {
    res.send(e);
  });
});
server.post("/updateData", async (req, res) => {
  console.log(req.body);
  await Plant.findByIdAndUpdate({ _id: req.body.id })
    .set({ plantname: req.body.plantname, plantprice: req.body.plantprice })
    .then((e) => {
      console.log("data update");
    });
});
server.post("/deleteData", async (req, res) => {
  console.log(req.body);
  await Plant.findByIdAndDelete({ _id: req.body.id }).then((e) => {
    console.log("data delete");
  });
});

server.post("/profile", async (req, res) => {
  try {
    console.log(req.body);
    const data = User.findByIdAndUpdate({ _id: req.body.id })
      .set(req.body.form)
      .then((e) => {
        console.log("update");
      });
    const data1 = User.findById({ _id: req.body.id }).then((e) => {
      res.json(e);
    });
    // const user = await User.updateOne(
    //   {
    //     username: JSON.stringify(req.body.data.username),
    //   },
    //   {
    //     $set: {
    //       firstname: req.body.data.firstname,
    //       lastname: req.body.data.lastname,
    //       emailaddress: req.body.data.emailaddress,
    //       mobilenumber: req.body.data.mobilenumber,
    //       username: req.body.data.username,
    //       password: req.body.data.password,
    //     },
    //   }
    // ).exec();
    // console.log(user);
    // res.json(user.data);
  } catch (error) {
    console.log(error);
  }
});

// server.post('/fetch-profile', (req, res) => {
//   console.log(req.body)
// })

server.listen(8080, () => {
  console.log("Server Started.");
});
