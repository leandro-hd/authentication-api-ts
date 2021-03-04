import mongoose from 'mongoose';

const uri = process.env.MONGODB_URL

mongoose.connect(process.env.MONGODB_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

export { mongoose };