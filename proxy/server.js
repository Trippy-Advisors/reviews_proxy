const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const axios = require("axios");

app.use("/:id", express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.get("/hotels/:hotelId/", (req, res) => {
  // console.log("http://localhost:1128/hotels/" + req.params.hotelId + "/");
  // res.send(req.params.hotelId);
  axios
    .get("http://localhost:1128/hotels/" + req.params.hotelId)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/reviews/hotels/:hotelId/", (req, res) => {
  // console.log("http://localhost:1128/hotels/" + req.params.hotelId + "/");
  // res.send(req.params.hotelId);
  axios
    .get("http://localhost:3001/reviews/hotels/" + req.params.hotelId)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/gallery/:hotelId/", (req, res) => {
  axios
    .get("http://localhost:6969/gallery/" + req.params.hotelId)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
