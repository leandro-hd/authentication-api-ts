import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/api', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

export { mongoose };