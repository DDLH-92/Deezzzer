const axios = require('axios');
const cors = require('cors');
const express = require("express");

const ep_top10 = "https://api.deezer.com/chart/0/tracks?limit=11";
const ep_top100 = "https://api.deezer.com/chart/0/tracks?limit=101";

const app = express();
app.use(cors())
app.options('*', cors());

app.get("/top10", (ex_req, ex_res, next) => {
  const index = ex_req.query.index
  axios.get(`${ep_top10}&index=${index * 10 || 0}`).then(ax_res => {
    ex_res.setHeader("Access-Control-Allow-Origin", "*");
    ex_res.setHeader('Access-Control-Allow-Methods', 'GET');
    ex_res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    ex_res.send(ax_res.data);
  });
});

app.get("/top100", (ex_req, ex_res, next) => {
  axios.get(ep_top100).then(ax_res => {
    ex_res.setHeader("Access-Control-Allow-Origin", "*");
    ex_res.setHeader('Access-Control-Allow-Methods', 'GET');
    ex_res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    ex_res.send(ax_res.data);
  });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
