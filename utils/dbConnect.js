const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// const connection = {};

async function dbConnect() {
  // if (connection.isConnected) {
  //   return;
  // }

  // const db = await mongoose.connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  // connection.isConnected = db.connection[0].readyState;
  // console.log(connection.isConnected);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

export default dbConnect;
