import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';
import manifestHelpers from 'express-manifest-helpers';
import proxy from 'express-http-proxy';
import path from 'path';

import dotenv from 'dotenv';
import paths from '../../config/paths';
import errorMiddleware from './middlewares/errorMiddleware';
import reactRouterMiddleware from './middlewares/reactRouterMiddleware';

dotenv.config();
const app = express();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
if (process.env.NODE_ENV === 'development') {
  app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
  app.use('/favicon.ico', (req, res) => {
    res.send('');
  });
}

app.use(cors());
app.use(bodyParser.json());
app.use(
  process.env.PROXY_API_ROUTE || '/api',
  proxy(process.env.API_BASE_URL, {
    proxyReqOptDecorator(opts) {
      /* eslint-disable-next-line no-param-reassign */
      opts.headers['x-forwarded-host'] = `localhost:${process.env.PORT || 3000}`;
      return opts;
    },
  }),
);
app.use(
  manifestHelpers({
    manifestPath: `${path.join(paths.clientBuild, paths.publicPath)}/manifest.json`,
  }),
);

app.use(errorMiddleware);
app.use(reactRouterMiddleware);

app.listen(process.env.PORT || 3000, () => {
  /* eslint-disable-next-line no-console */
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 3000}`),
  );
});

export default app;
