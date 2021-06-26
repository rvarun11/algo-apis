# "971500842006900010000802009500000790007608300028000005700105000040009100819007254"
def str_to_board(boardStr):
    board = []

    for i in range(len(boardStr)):
        if (i % 9 == 0):
            sub = boardStr[i:i + 9]
            lst = []
            for n in sub:
                lst.append(int(n))
            
            board.append(lst)
    
    return board

def is_safe(board,row,col,val):
    for i in range(9):
        if (board[i][col]==val): return False
        if (board[row][i]==val): return False

    gridRow = row - row%3
    gridCol = col - col%3

    for i in range(3):
        for j in range(3):
            if (board[gridRow + i][gridCol + j]==val): return False

    return True

def solve(board, row, col):
    
    if (row==9): return True
    if (col==9): return solve(board, row + 1, 0)

    if (board[row][col] != 0): return solve(board, row, col + 1)

    #placing numbers into the grid
    for num in range(1,10):
        if is_safe(board, row, col, num):
            board[row][col] = num

            if solve(board, row, col + 1): return True
    
    board[row][col] = 0

    return False

def checker(st):
    return (type(st) == str and len(st) == 81 and st.isdigit())

# puzzle = "010020300004003020050000006007600050000100002060072000300008070000900108009000000"
# solution = str_to_board(puzzle)
# solve(solution,0,0)
# print(solution)