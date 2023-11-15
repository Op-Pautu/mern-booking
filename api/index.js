const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const path = require("path");
const User = require("./models/User");

const app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    return res.json(userDoc);
  } catch (e) {
    return res.status(422).json(e);
  }
});

app.get("/login", (req, res) => {
  res.json("test");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          return res.cookie("token", token, { sameSite: "none" }).json(userDoc);
        }
      );
    } else {
      return res.status(422).json("bad pass");
    }
  } else {
    return res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      return res.json({ name, email, _id, token });
    });
  } else {
    return res.json(null);
  }
});

app.post("/logout", (req, res) => {
  return res.clearCookie("token").json(true);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpeg";
  const filePath = path.join(__dirname, "uploads", newName);
  await imageDownloader.image({
    url: link,
    dest: filePath,
  });

  return res.json(newName);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
