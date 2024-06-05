import { CELL_VALUE } from "../constants";

function createBoard(rows, cols) {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => CELL_VALUE.POSSIBLE_MOVE));
}

export default createBoard;