const mongoose = require("mongoose");

const url =
  "mongodb+srv://practice:tx4RWKcTfMVnvCEb@practice.9ouahhu.mongodb.net/";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
