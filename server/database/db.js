import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://shivani13222:codeforinterview@cluster0-shard-00-00.egs3h.mongodb.net:27017,cluster0-shard-00-01.egs3h.mongodb.net:27017,cluster0-shard-00-02.egs3h.mongodb.net:27017/?ssl=true&replicaSet=atlas-2p05im-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
