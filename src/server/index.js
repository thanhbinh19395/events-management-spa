import express from 'express';
import chalk from 'chalk';

import renderer from './helpers/renderer';

const app = express();

app.get('*', (req, res) => {
  renderer(req, res)
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `[${new Date().toISOString()}]`,
    chalk.blue(`App is running: 🌎 http://localhost:${process.env.PORT || 3000}`)
  );
});

export default app;