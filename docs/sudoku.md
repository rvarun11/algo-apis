# Sudoku Solver


It expects a POST request with sudoku input represented as an (9x9) 2D array with 0s for blanks.

## Info:

**URL**: `/sudoku`

**Verb**: POST

**Format**: JSON

**Content-Type**: application/json


## Example Requests

Consider the following example,  

`curl -H 'Content-Type: application/json' -X POST -d '{
    "board" :
        [[5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9 ]]
}' http://127.0.0.1:5000/sudoku`


## Example Response

Response is always a JSON object as shown below.

#### Success
```json
{
  "status":"success",
  "message":"OK!",
  "board":
    [[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]]
}
```

#### Errors
  1. Input Error: When the JSON object is not in the correct format.
```json
{
    "status": "fail",
    "message": "Invalid Input. Please check documenation"
}
```
  2. Unsolvable Error When input is in the correct format but the board is unsolvable.
```json
{
    "status": "success",
    "message": "Cannot be solved"
}
```
