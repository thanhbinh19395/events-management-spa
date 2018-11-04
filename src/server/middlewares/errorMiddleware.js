import path from 'path';


// TODO: Handle other errors
// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => res.status(404).json({
  status: 'error',
  message: error.message,
  stack:
  // print a nicer stack trace by splitting line breaks and making them array items
      process.env.NODE_ENV === 'development'
      && (error.stack || '')
        .split('\n')
        .map(line => line.trim())
        .map(line => line.split(path.sep).join('/'))
        .map(line => line.replace(
          process
            .cwd()
            .split(path.sep)
            .join('/'),
          '.',
        )),
});
