function GameGridBox({value, onClickFunction}){

    return(
        <button className={`game-grid-box ${toString(value)}`} onClick={onClickFunction}>{value}</button>
    )
}
export {GameGridBox};