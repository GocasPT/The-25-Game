import { CELL_VALUE, HORIZONTAL_MOVE, VERTICAL_MOVE, DIAGONAL_MOVE } from "../constants";

function setNextPossbielMoves(board, rowIndex, colIndex) {
    const x1 = rowIndex - HORIZONTAL_MOVE , x2 = rowIndex - DIAGONAL_MOVE , x3 = rowIndex + DIAGONAL_MOVE , x4 = rowIndex + HORIZONTAL_MOVE ;
    const y1 = colIndex - VERTICAL_MOVE, y2 = colIndex - DIAGONAL_MOVE, y3 = colIndex + DIAGONAL_MOVE , y4 = colIndex + VERTICAL_MOVE;
    const boardSize = board.length;
    let isPossibleMoveSet = false;

    // Horizontal moves
    if (x1 >= 0)
        if (board[x1][colIndex] === CELL_VALUE.EMPTY) {
            board[x1][colIndex] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }
    if (x4 < boardSize)
        if (board[x4][colIndex] === CELL_VALUE.EMPTY) {
            board[x4][colIndex] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }

    // Vertical moves
    if (y1 >= 0) 
        if (board[rowIndex][y1] === CELL_VALUE.EMPTY) {
            board[rowIndex][y1] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }
    if (y4 < boardSize)
        if (board[rowIndex][y4] === CELL_VALUE.EMPTY) {
            board[rowIndex][y4] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }

    // Diagonal moves
    if (x2 >= 0 && y2 >= 0)
        if (board[x2][y2] === CELL_VALUE.EMPTY) {
            board[x2][y2] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }
    if (x2 >= 0 && y3 < boardSize)
        if (board[x2][y3] === CELL_VALUE.EMPTY) {
            board[x2][y3] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }
    if (x3 < boardSize && y2 >= 0)
        if (board[x3][y2] === CELL_VALUE.EMPTY) {
            board[x3][y2] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }
    if (x3 < boardSize && y3 < boardSize)
        if (board[x3][y3] === CELL_VALUE.EMPTY) {
            board[x3][y3] = CELL_VALUE.POSSIBLE_MOVE;
            isPossibleMoveSet = true;
        }

    return isPossibleMoveSet;
}

export default setNextPossbielMoves;