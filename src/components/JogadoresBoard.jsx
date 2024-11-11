import NameBoard from "./NameBoard"
import "./JogadoresBoard.css"

function JogadoresBoard(props) {



    let player1Class = props.player === "X" ? "nameBoard thisPlayer" : "nameBoard"
    let player2Class = props.player === "O" ? "nameBoard thisPlayer" : "nameBoard"    

    return (
        <div className="jogadoresBoard">
            <NameBoard className={player1Class} name={"Jogador 1"}/>
            <NameBoard className={player2Class}  name={"Jogador 2"}/>
        </div>
    )
}

export default JogadoresBoard