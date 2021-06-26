const solve = (inputs) => {
    const maze = inputs.maze;
    const start = inputs.start;
    const end = inputs.end;
    const sol = maze;
    return { ...maze, sol };
};

module.exports = (req, res) => {
    const result = solve(req.inputs);

    res.status(200).json({
        status: 'success',
        result,
    });
};
