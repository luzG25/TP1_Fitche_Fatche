import NameBoard from "./NameBoard"
import "./JogadoresBoard.css"

function JogadoresBoard() {
    

    return (
        <div className="jogadoresBoard">
            <NameBoard className="nameBoard" name={"Jogador 1"}/>
            <NameBoard className="nameBoard"  name={"Jogador 2"}/>
        </div>
    )
}

export default JogadoresBoard