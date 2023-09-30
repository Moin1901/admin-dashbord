import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://moin1901:moin1901@cluster0.sdbrhng.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conntect to db");
  } catch (error) {
    console.log(error);
  }
};
export default connectToDB;
