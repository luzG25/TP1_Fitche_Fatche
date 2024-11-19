import { useState } from 'react'
import JogadoresBoard from './components/JogadoresBoard'
import Tabuleiro from './components/Tabuleiro'
import Winner from './components/winner'
import TabCheio from './components/TabCheio'


function App() {


  let tabuleiro = [
    ["", "", ""],
    ["", "", ""], 
    ["", "", ""]
  ]

  const [players, setPlayers] = useState([
    {"nome": "Jogador 1", "sign": "X"},
    {"nome": "Jogador 2", "sign": "O"}
  ])
  const [tab, setTab] = useState(tabuleiro)
  const [player, setPlayer] = useState("X")
  const [win, setWin] = useState(false)
  const [tabCheio, setTabCheio] = useState(false)


  function resetarTabuleiro() {
    setTab(tabuleiro)
    setTabCheio(false)
    setWin(false)
  }

  let winnerStyle = "absolute inset-0 w-full h-full bg-black/70 rounded-lg flex flex-col items-center justify-center text-center z-10"

   
  return (
    <div className="relative bg-[#f0f0f0] p-5 border border-gray-300 rounded-lg">
        <JogadoresBoard player={player} players={players} setPlayers={setPlayers}/>
        <Tabuleiro player={player} setPlayer={setPlayer} setWin={setWin} tab={tab} setTab={setTab} setTabCheio={setTabCheio}/>
        
        {
          win &&
          <Winner className={winnerStyle} player={player === "O" ? "Jogador 1" : "Jogador 2"}  resetTab={resetarTabuleiro}/>
        }

        {
          tabCheio && !win &&
          <TabCheio className={winnerStyle} resetTab={resetarTabuleiro}/>
        }
    </div>
 
  )
}

export default App
