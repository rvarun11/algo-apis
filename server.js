const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception!! Shutting Down');
  console.log(err.name, err.message);
  process.exit(1);
});
dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`AlgoAPIs is Running on Port : ${port}`)
);

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Exception!! Shutting Down');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
