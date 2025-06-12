require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.get('/addHoldings',async(req,res)=>{
    let tempHoldings
})

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`App started on port ${PORT} !!`);
  });
})
.catch((err) => {
  console.error("DB Connection Error:", err.message);
});
