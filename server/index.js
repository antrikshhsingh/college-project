const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(require("express").json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB runnig successfully");
  })
  .catch((err) => {
    console.log(err);
  });
const UserRoute = require("./routes/user");
app.use("/user", UserRoute);

app.listen(8080, () => {
  console.log("running server");
});
