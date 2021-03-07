import { useState } from 'react';
import {GameGrid} from './GameGrid';

import './GameStyles.css';
import {Button} from 'react-bootstrap'
function Game(){

    const [currentGameHistory, setGameHistory] = useState([Array(9).fill("")])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)

    return(
        <div className="game">
            <h1 className="game-h1">Tic-Tac-Toe</h1>
            <GameGrid className="game-item" currentGame={currentGameHistory[stepNumber]} stepNumber={stepNumber} setStepNumber={setStepNumber} setGameHistory={setGameHistory} currentGameHistory={currentGameHistory} xIsNext={xIsNext} setXisNext={setXisNext}/>
            <h1 className="game-h1">{`Step Number: ${stepNumber}` }</h1>
            <div className="game-buttons">    
                <Button variant="dark" className="game-button" onClick={() => {if(stepNumber === 0) return; setStepNumber(stepNumber - 1);}}>Previous State</Button>
                <Button variant="dark" className="game-button" onClick={() => setStepNumber(currentGameHistory.length - 1)}>Go To Recent Step</Button>
                <Button variant="dark" className="game-button" onClick={() => {setGameHistory([Array(9).fill("")]); setStepNumber(0)}}>Reset Game</Button>
            </div>

            <audio className="audio-source" src="./assets/Space-Free-Yuriy-Bespalov.wav" type="audio/wav" controls autoPlay loop={true} />

        </div>
    )
}

export {Game};