import { Request, Response } from 'express';
import { User } from '../models/user';
import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
  async auth( request: Request, response: Response) {
    const { email, password } = request.body;

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json(err);
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return response.status(400).json('User not found!');
    };

    if (!await bcrypt.compare(password, user.password)) {
      return response.status(400).json('Invalid password!');
    }

    const authConfig = process.env.SECRET;

    const token = jwt.sign({ id: user.id }, authConfig, {
      expiresIn: 86400
    });

    user.password = undefined;
   
    return response.status(201).json({user, token});
  }
}

export { AuthController }; 