import {GameGridBox} from './GameGridBox';

import {calculateWinner} from './calculateWinner';

function GameGrid({currentGame, stepNumber, setStepNumber, setGameHistory, currentGameHistory, xIsNext, setXisNext}){

    const onGameGridBoxClick = (index) => {

        const renderGrid = [...currentGame]

        if(stepNumber !== currentGameHistory.length - 1) {
            alert("No backtracking to swap boxes, you can only view, reset to start from beginning")
            return
        }
        if(renderGrid[index] !== "" || calculateWinner(renderGrid) !== null ) return

        renderGrid[index] = xIsNext ? "X" : "O"
        setXisNext(!xIsNext)
        setGameHistory(currentGameHistory.concat([renderGrid.slice(0, 9)]))
        setStepNumber(stepNumber + 1)

        if(calculateWinner(renderGrid) != null){
            alert("Winner: " + calculateWinner(renderGrid))
        }
    }

    return(

        <div>
            <div className="game-grid">
                <GameGridBox value={currentGame[0]} onClickFunction={() => {onGameGridBoxClick(0)}}/>
                <GameGridBox value={currentGame[1]} onClickFunction={() => {onGameGridBoxClick(1)}}/>
                <GameGridBox value={currentGame[2]} onClickFunction={() => {onGameGridBoxClick(2)}}/>
            </div>
            <div className="game-grid">
                <GameGridBox value={currentGame[3]} onClickFunction={() => {onGameGridBoxClick(3)}}/>
                <GameGridBox value={currentGame[4]} onClickFunction={() => {onGameGridBoxClick(4)}}/>
                <GameGridBox value={currentGame[5]} onClickFunction={() => {onGameGridBoxClick(5)}}/>
            </div>
            <div className="game-grid">
                <GameGridBox value={currentGame[6]} onClickFunction={() => {onGameGridBoxClick(6)}}/>
                <GameGridBox value={currentGame[7]} onClickFunction={() => {onGameGridBoxClick(7)}}/>
                <GameGridBox value={currentGame[8]} onClickFunction={() => {onGameGridBoxClick(8)}}/>
            </div>
        </div>

    )
}

export {GameGrid};