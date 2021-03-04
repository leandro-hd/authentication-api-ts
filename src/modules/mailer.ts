import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars'

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT_MAIL,
  auth: {
    user: process.env.USER,
    pass: process.env.pass
  }
});

transport.use('compile', hbs({
  viewEngine:  {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/views/mail/')
  },
  viewPath: path.resolve('./src/views/mail/'),
  extName: '.hbs'
}));

export { transport };