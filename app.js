const express = require('express');
const morgan = require('morgan');

const algoController = require('./controller/algoController');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./utils/errorHandler');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

// algorithm routes
app.post('/sudoku/', algoController.sudoku);
app.post('/astar/', algoController.astar);

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.url}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
