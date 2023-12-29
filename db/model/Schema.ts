import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isSubscribe: Boolean,
})

export const Users = models.user || model('user', userSchema);
