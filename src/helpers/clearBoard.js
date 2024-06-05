import { CELL_VALUE } from "../constants";

function clearBoard(board) {
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (board[rowIndex][colIndex] === CELL_VALUE.POSSIBLE_MOVE)
                board[rowIndex][colIndex] = CELL_VALUE.EMPTY;
        })
    })
}

export default clearBoard;