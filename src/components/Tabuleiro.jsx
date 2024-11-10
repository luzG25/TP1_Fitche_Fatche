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

    /*
     {dados.map((linha, index) => (
        <div key={index} className="linha">
          {/* Iterando sobre cada array interno e renderizando os elementos }
          {linha.map((item, i) => (
            <span key={i} className="item">{item}</span>
          ))}
    */

    return (
        <div className="tabuleiro">

            {tabuleiro.map((linha, index) => (
                <div key={index} className="row">
                    {linha.map((item, i) => (
                        <Cubo marker={item}/>
                    ))}
                </div>
            ))}
            
        </div>
    )
}

export default Tabuleiro