# A\* Pathfinder

Referred to this amazing [article](https://medium.com/@nicholas.w.swift/easy-a-star-pathfinding-7e6689c7f7b2).

It expects a JSON-based POST request consisting of a 2D grid, with start and end coordinates.

## Info

**URI**: `/astar`

## Example Request

Consider the following example,

```json
{
  "maze": [
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1]
  ],
  "start": [0, 1],
  "end": [1, 2]
}
```

#### JSON-based request

`curl -H 'Content-Type: application/json' -X POST -d '{ "maze": [[0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 1]], "start": [0, 1], "end": [1, 2], }' http://127.0.0.1:8000/astar`

## Example Response

Response is always a JSON object as shown below.

#### Success

```json
{
  "status": "success",
  "message": "OK!"
  "solution": [
    [0, 1],
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2]
  ],
}
```

#### Errors

1. Input Error: When the JSON object is not in the correct format.

```json
{
  "status": "fail",
  "message": "Invalid input. Please check documenation"
}
```

2. Unsolvable Error When input is in the correct format but the board is unsolvable.

```json
{
  "status": "success",
  "message": "No path available from start coordinates to end coordinates"
}
```
