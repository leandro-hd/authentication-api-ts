import { Request, Response } from 'express';
import { User } from '../models/user';
import crypto from 'crypto';
import { transport } from '../modules/mailer';

class MailController {
  async mail( request: Request, response: Response) {
    const { email } = request.body;
    
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return response.status(400).json('User not found!');
      };

      const token = crypto.randomBytes(20).toString('hex');
      
      const now = new Date();
      now.setHours(now.getHours() + 1);

      await User.findByIdAndUpdate(user.id, {
        '$set': {
          passwordResetToken: token,
          passwordResetExpires: now
        }
      },
      { 
        new: true,
        useFindAndModify: false 
      }
      );

      transport.sendMail({
        to: email,
        from: 'leandrohg2003@gmail.com',
        template: 'reset/resetPassword',
        context: { token }
      }, (err) => {
        if (err) {
          return response.status(400).json(err)
        }
        return response.status(200).json('Success');
      })
    } catch (err) {
      console.log('Her')
      return response.status(400).json(err);
    }  
  }
}

export { MailController }; 