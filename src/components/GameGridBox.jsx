function GameGridBox({value, onClickFunction}){

    return(
        <button className={`game-grid-box item${toString(value)}`} onClick={onClickFunction}>{value}</button>
    )
}
export {GameGridBox};