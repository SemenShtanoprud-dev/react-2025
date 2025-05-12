export default function Log({ turns }) {
    return (
        <div id="log">
            <ol>
                {turns.map((turn) => (
                    <li key={`${turn.square.row}-${turn.square.col}`}>
                        {turn.player} selected {turn.square.row}, {turn.square.col}
                    </li>
                ))}
            </ol>
        </div>
    );
}