import Cubo from "./cubo"
import { useState } from 'react'

function Tabuleiro({tab, setTab, setTabCheio,...props})
{
   
    function validarTab(){
        /*
        [00,01,02]
        [10,11,12]
        [20,21,22]
        */ 

        let player = props.player === "X" ? "O" : "X"
        let tabCheio = true
        

        function winner()
        {
            props.setWin(true)
            
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

            //verificar tabuleiro cheio
            for (let j=0; j<3; j++){
                if (tab[i][j] == "") 
                    tabCheio = false
            }

        }

        //implementar resposta de tabuleiro cheio
        if (tabCheio) setTabCheio(true)
    }



    function handleClick(col, line, player){
        let Ntab = [...tab]
        Ntab[line][col] = player
        //console.log(...Ntab)
        setTab(Ntab)
        props.setPlayer(props.player === "X" ? "O" : "X")
    }
    
    validarTab()

    return (
        <div>

            {tab.map((linha, index) => (
                <div key={index} className="flex gap-2.5">
                    {linha.map((item, i) => (
                        <Cubo marker={item} handleClick={handleClick} col={i} line={index} player={props.player}/>
                    ))}
                </div>
            ))}
            
        </div>
    )
}

export default Tabuleiro