import PropTypes from "prop-types";
import { CELL_VALUE } from "../../constants";
import "./cell.css"

function Cell({ value, onCellClick }) {
    const cellContent = () => {
        if (value === CELL_VALUE.EMPTY || value === CELL_VALUE.POSSIBLE_MOVE) return null;
        return value;
    }

    return (
        <button
            className={
                `cell ${
                    value === CELL_VALUE.POSSIBLE_MOVE
                    ? "enable"
                    : cellContent() != null
                        ? "withNumber"
                        : ""
                    }`
            }
            onClick={onCellClick}>
            {cellContent()}
        </button>
    );
}

Cell.propTypes = {
    value: PropTypes.number.isRequired,
    onCellClick: PropTypes.func.isRequired
}

export default Cell