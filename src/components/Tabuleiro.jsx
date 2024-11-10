import Cubo from "./cubo"
import "./Cubo.css" 
import { useState } from 'react'

function Tabuleiro()
{
    let tabuleiro = [
        [[""], [""], [""]],
        [[""], [""], [""]], 
        [[""], [""], [""]]
    ]

    const [tab, setTab] = useState(tabuleiro)
    const [player, setPlayer] = useState("X")
    
    function validarTab(player){
        /*
        [00,01,02]
        [10,11,12]
        [20,21,22]
        */

       
    }

    function handleClick(col, line, player){
        let Ntab = [...tab]
        Ntab[line][col] = player
        console.log(...Ntab)
        setTab(Ntab)
        setPlayer(player === "X" ? "O" : "X")
    }
    

    return (
        <div className="tabuleiro">

            {tab.map((linha, index) => (
                <div key={index} className="row">
                    {linha.map((item, i) => (
                        <Cubo marker={item} handleClick={handleClick} col={i} line={index} player={player}/>
                    ))}
                </div>
            ))}
            
        </div>
    )
}

export default Tabuleiro