from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from astar.service import  start_solver

# Create your views here.
def prepare_response(maze, solution, msg):
    return { "maze": maze, "solution": solution, "message": msg }

@csrf_exempt
def solve_astar(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        
    try:
        maze = data["maze"]
        path = start_solver(maze)
    except:
        return JsonResponse(prepare_response([], [], "Error"))

    return JsonResponse(prepare_response(maze, path, "Success"))
