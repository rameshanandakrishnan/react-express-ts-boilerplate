import app from './server/app';

app.set('port', process.env.PORT || 3000);
app.set('trust proxy', true);

app.listen(app.get('port'), (err?: Error) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${app.get('port')}`);
});
