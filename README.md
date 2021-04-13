# AlgoAPIs

This project aims to provide REST APIs for different intriguing algorithms.

The API exposes a single REST endpoint for the algorithm, which expects a POST request.
Use `/{algorithm_name}` to get started.


## Sudoku Solver API

It expects a POST request with sudoku input represented as an 81-character string with 0s for blanks.

## Info:

**URL**: `http://127.0.0.1:8000/sudoku`

**Verb**: POST

**Format**: JSON

**Content-Type**: application/json


## Example Requests

Consider the following example, 
`010020300004003020050000006007600050000100002060072000300008070000900108009000000`

#### Form-based request

`curl -X POST -d "board=010020300004003020050000006007600050000100002060072000300008070000900108009000000" http://127.0.0.1:8000/sudoku`

#### JSON-based request

`curl -H 'Content-Type: application/json' -X POST -d '{"board":"010020300004003020050000006007600050000100002060072000300008070000900108009000000"}' http://127.0.0.1:8000/sudoku`


## Example Response

Response is always a JSON object as shown below.

#### Success
```json
{
  "board": "010020300004003020050000006007600050000100002060072000300008070000900108009000000",
  "solution": 
    [[8, 1, 6, 4, 2, 5, 3, 9, 7],
     [7, 9, 4, 8, 6, 3, 5, 2, 1],
     [2, 5, 3, 7, 9, 1, 4, 8, 6],
     [1, 2, 7, 6, 3, 9, 8, 5, 4],
     [9, 3, 5, 1, 8, 4, 7, 6, 2], 
     [4, 6, 8, 5, 7, 2, 9, 1, 3],
     [3, 4, 1, 2, 5, 8, 6, 7, 9],
     [5, 7, 2, 9, 4, 6, 1, 3, 8],
     [6, 8, 9, 3, 1, 7, 2, 4, 5]],
  "message": "OK"
}
```

#### Error
```json
{
  "board":"010020300004003020050000006007600050000100002060072000300008070000900108009000000",
  "solution":[],
  "message": "Unsolvable"
}
```
