import { mongoose } from '../database';
import MUUID from 'uuid-mongodb'
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  password: String;
  passwordResetToken: String;
  passwordResetExpires: Date;
}

const UserSchema = new mongoose.Schema({
  _id: {
    type: 'object',
    value: { type: 'Buffer' },
    default: () => MUUID.v4().toString(),
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre<IUser>('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

const User = mongoose.model<IUser & Document>('User', UserSchema);

export { User };