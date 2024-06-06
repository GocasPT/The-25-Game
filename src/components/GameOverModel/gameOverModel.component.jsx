import PropTypes from "prop-types";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

function GameOverModel({ isGameOver, onRestart }) {
    return (
        <Modal isOpen={isGameOver} onOpenChange={onRestart} className="dark">
            <ModalContent>
                <ModalHeader>Game Over</ModalHeader>
                <ModalBody>
                    Texto body
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
    onRestart: PropTypes.func.isRequired
}

export default GameOverModel;