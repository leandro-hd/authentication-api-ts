import { Request, Response } from 'express';
import { User } from '../models/user';
import * as yup from 'yup';

class UserController {
  async create( request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json(err);
    }

    const userAlreadyExists = await User.findOne({
      email
    });

    if (userAlreadyExists) {
      return response.status(400).json('User already exists!');
    };

    const user = await User.create(request.body);

    user.password = undefined;
    
    return response.status(201).redirect('/login');
  }
}

export { UserController }; 