import mongoose from "mongoose";

const connection = async (username,password) => {
    const URL =
  `mongodb+srv://${username}:${password}@flipcartclone.rnhbh.mongodb.net/flipcartclone?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Connected...");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
export default connection;
