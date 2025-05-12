
export default function GameOver({ winner, refreshButtonHandler }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} wins!</p>}
            {!winner && <p>It's a draw</p>}
            <button onClick={refreshButtonHandler}>Play Again</button>
        </div>
    )
}