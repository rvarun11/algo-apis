# A* Pathfinder

Referred to this amazing [article](https://medium.com/@nicholas.w.swift/easy-a-star-pathfinding-7e6689c7f7b2).

It expects a JSON-based POST request consisting of a 2D grid, start coordinate and an end coordinate.

## Info:

**URL**: `http://127.0.0.1:8000/astar`

**Verb**: POST

**Format**: JSON

**Content-Type**: application/json


## Example Requests

Consider the following example, 
```json
{
"maze": [[0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 1]], 
 "start": [0, 1], 
 "end": [1, 2], 
}
```

#### JSON-based request

`curl -H 'Content-Type: application/json' -X POST -d '{ "maze": [[0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 1]], "start": [0, 1], "end": [1, 2], }' http://127.0.0.1:8000/astar`

## Example Response

Response is always a JSON object as shown below.

#### Success
```json
{
"maze": [[0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 1]], 
 "start": [0, 1], 
 "end": [1, 2], 
 "solution": [[0, 1], [0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2]],
 "message": "Success"
}
```


#### Error
Input Error occurs when the input is not in correct format. Few bugs are still there!

Unsolvable Error occurs when input destination is unreachable.
```json
{
 "maze": [[0, 0, 1, 0, 1], 
          [0, 1, 0, 0, 1], 
          [1, 0, 0, 0, 1]], 
 "start": [0, 1],  
 "end": [1, 2], 
 "solution": null, 
 "message": "Unsolvable"}
}
```
