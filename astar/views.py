from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from sudoku.service import checker, str_to_board, solve

# Create your views here.
def prepare_response():
    return None

@csrf_exempt
def solve_astar(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
    return JsonResponse(data)