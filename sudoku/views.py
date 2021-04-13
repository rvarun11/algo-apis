from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from sudoku.service import checker, str_to_board, solve
# Create your views here.

def prepare_response(board, solution, msg):
    return { "board": board, "solution": solution, "message": msg }

@csrf_exempt
def solve_view(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        puzzle = data["board"]

    if checker(puzzle):
        solution = str_to_board(puzzle)
        solve(solution, 0, 0)
        return JsonResponse(prepare_response(puzzle, solution, "OK"))
    else:
        return JsonResponse(prepare_response(puzzle, [], "Unsolvable"))
