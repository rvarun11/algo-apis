from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from astar.service import  start_solver

# Create your views here.
def prepare_response(maze, start, end, solution, msg):
    return { "maze": maze,"start": start, "end": end, "solution": solution, "message": msg }

@csrf_exempt
def solve_astar(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        
    try:
        maze = data["maze"]
        start = (data["start"][0], data["start"][1])
        end = (data["end"][0], data["end"][1])
        path = start_solver(maze, start, end)
    except:
        return JsonResponse(prepare_response(maze, start, end, None, "Input Error"))

    if (path == None):
        return JsonResponse(prepare_response(maze, start, end, None, "Unsolvable"))

    return JsonResponse(prepare_response(maze, start, end, path, "Success"))
