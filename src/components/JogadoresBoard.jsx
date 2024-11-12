import NameBoard from "./NameBoard"
import "./JogadoresBoard.css"

function JogadoresBoard({players, setPlayers, ...props}) {


    let player1Class = props.player === "X" ? "nameBoard thisPlayer" : "nameBoard"
    let player2Class = props.player === "O" ? "nameBoard thisPlayer" : "nameBoard"    

    return (
        <div className="jogadoresBoard">
            <NameBoard className={player1Class} index={0} players={players} setPlayers={setPlayers}/>
            <NameBoard className={player2Class} index={1} players={players} setPlayers={setPlayers}/>
        </div>
    )
}

export default JogadoresBoard