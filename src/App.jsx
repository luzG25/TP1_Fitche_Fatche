import { useState } from 'react'
import './App.css'
import JogadoresBoard from './components/JogadoresBoard'
import Tabuleiro from './components/Tabuleiro'
import Winner from './components/winner'
import TabCheio from './components/TabCheio'


function App() {

  let tabuleiro = [
    [[""], [""], [""]],
    [[""], [""], [""]], 
    [[""], [""], [""]]
  ]

  const [tab, setTab] = useState(tabuleiro)
  const [player, setPlayer] = useState("X")
  const [win, setWin] = useState(false)
  const [tabCheio, setTabCheio] = useState(false)
  

  function resetarTabuleiro() {
    setTab(tabuleiro)
    setTabCheio(false)
    setWin(false)
  }

   
  return (
    <div className='app'>
        <JogadoresBoard player={player}/>
        <Tabuleiro player={player} setPlayer={setPlayer} setWin={setWin} tab={tab} setTab={setTab} setTabCheio={setTabCheio}/>
        
        {
          win &&
          <Winner player={player === "O" ? "Jogador 1" : "Jogador 2"}  resetTab={resetarTabuleiro}/>
        }

        {
          tabCheio && !win &&
          <TabCheio resetTab={resetarTabuleiro}/>
        }
    </div>
 
  )
}

export default App
