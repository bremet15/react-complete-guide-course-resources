export default function GameOver( {winner, onRestart} ) {
    return (
    <div id="game-over">
   
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}       {/* If there is a winner */}
      {!winner && <p>It is a draw</p>}      {/* If empty(winner) */}
   
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div> )
  }