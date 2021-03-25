import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { router } from './routes';
import nunjucks from 'nunjucks';

const app = express();

nunjucks.configure('src/views/pages', {
  express: app,
  noCache: true,
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

export { app };