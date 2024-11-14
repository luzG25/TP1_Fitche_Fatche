import NameBoard from "./NameBoard"

function JogadoresBoard({players, setPlayers, ...props}) {

    let styleClass = "flex bg-[#ADD8E6] p-2.5 border-2 border-gray-300 mx-auto my-5 w-48 text-center justify-between items-center"
    
    

    let player1Class = props.player === "X" ? styleClass + " border-2.5 border-red-900" : styleClass
    let player2Class = props.player === "O" ?  styleClass + " border-2.5 border-red-900" : styleClass    


    return (
        <div className="flex gap-5">
            <NameBoard className={player1Class} index={0} players={players} setPlayers={setPlayers}/>
            <NameBoard className={player2Class} index={1} players={players} setPlayers={setPlayers}/>
        </div>
    )
}

export default JogadoresBoard