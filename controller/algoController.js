const AppError = require('../utils/appError');
const solveSudoku = require('../algos/sudoku');
const solveAstar = require('../algos/astar');

exports.sudoku = (req, res, next) => {
  const result = solveSudoku(req.body.board);
  if (!result)
    return next(new AppError('Invalid input. Please check documenation', 400));

  res.status(200).json({
    status: 'success',
    ...result,
  });
};

exports.astar = (req, res, next) => {
  const result = solveAstart(req.body.maze, req.body.start, req.body.end);
  if (!result)
    return next(new AppError('Invalid input. Please check documenation', 400));

  res.status(200).json({
    status: 'success',
    ...result,
  });
};
