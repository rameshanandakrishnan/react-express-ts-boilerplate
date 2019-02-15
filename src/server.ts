import getApp from './server/app';

try {
  const app = getApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
