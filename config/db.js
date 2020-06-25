const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
          await mongoose.connect(process.env.MONGODB_URI || db, {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true,
              useFindAndModify: false
              
          });

          console.log('MongoDB connecté ...');
    } catch(err) {
            console.log(err.message);
            process.exit(1);
    }
}

module.exports = connectDB;