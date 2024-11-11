import Cubo from "./cubo"
import "./Cubo.css" 
import { useState } from 'react'

function Tabuleiro(props)
{
    let tabuleiro = [
        [[""], [""], [""]],
        [[""], [""], [""]], 
        [[""], [""], [""]]
    ]

    const [tab, setTab] = useState(tabuleiro)
    
    function validarTab(){
        /*
        [00,01,02]
        [10,11,12]
        [20,21,22]
        */ 

        let player = props.player === "X" ? "O" : "X"

        function winner()
        {
            let winPlayer = player === "X" ? "Jogador 1" : "Jogador 2"
            alert(winPlayer + " Ganhou a partida")
            
        }

        ////verificar diagonias
        if (
            (tab[0][0] === player && tab[1][1] === player && tab[2][2] === player) ||
            (tab[0][2] === player && tab[1][1] === player && tab[2][0] === player)
        )
            winner()

        
        for (let i=0; i < 3; i++){
            
            //verificar linhas
            if (tab[i][0] ===  player && tab[i][1] === player && tab[i][2] === player)
                winner()

            //verificar colunas
            else if (tab[0][i] === player && tab[1][i] === player && tab[2][i] === player)
                winner()

        }
    }

    function handleClick(col, line, player){
        let Ntab = [...tab]
        Ntab[line][col] = player
        console.log(...Ntab)
        setTab(Ntab)
        props.setPlayer(props.player === "X" ? "O" : "X")
    }
    
    validarTab()

    return (
        <div className="tabuleiro">

            {tab.map((linha, index) => (
                <div key={index} className="row">
                    {linha.map((item, i) => (
                        <Cubo marker={item} handleClick={handleClick} col={i} line={index} player={props.player}/>
                    ))}
                </div>
            ))}
            
        </div>
    )
}

export default Tabuleiro