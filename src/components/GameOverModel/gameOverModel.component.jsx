import PropTypes from "prop-types";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

function GameOverModel({ isGameOver, fillCells, maxCells, onRestart }) {
    return (
        <Modal isOpen={isGameOver} onOpenChange={onRestart} className="dark">
            <ModalContent>
                <ModalHeader>Game Over</ModalHeader>
                <ModalBody>
                    You fill {fillCells} of {maxCells} cells.
                </ModalBody>
                <ModalFooter>
                    <Button onPress={onRestart}>Restart</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

GameOverModel.propTypes = {
    isGameOver: PropTypes.bool.isRequired,
    fillCells: PropTypes.number.isRequired,
    maxCells: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
}

export default GameOverModel;