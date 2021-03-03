import { Request, Response } from 'express';
import { User } from '../models/user';

class ResetController {
  async reset( request: Request, response: Response) {
    const { email, token, password } = request.body;
    
    try {
      const user = await User.findOne({ email }).select('+passwordResetToken passwordResetExpires');

      if (!user) {
        return response.status(400).json('User not found!');
      };

      if (token !== user.passwordResetToken) {
        return response.status(400).json('Token invalid!');
      };

      const now = new Date();

      if (now > user.passwordResetExpires) {
        return response.status(400).json('Token expired, generate a new one!');
      };

      user.password = password;

      await user.save();
      
      return response.status(200).json('Success');
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}

export { ResetController }; 