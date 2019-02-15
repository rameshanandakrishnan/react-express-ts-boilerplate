import path from 'path';
import express from 'express';

const app = express();
app.use(
  '/static',
  express.static(path.resolve(__dirname, '..', '..', 'build', 'static'), {
    maxAge: 365 * 24 * 60 * 60 * 1000, //Cache for a year
    setHeaders: res => {
      res.set('Access-Control-Allow-Origin', '*');
    }
  })
);

app.use(function(req, res, next) {
  if (!req.url.startsWith('/api')) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
  } else {
    next();
  }
});

export default app;
