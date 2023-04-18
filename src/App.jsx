import "./App.css"
import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./components/Constans"
import { checkWinnerFrom } from "./Logic/Board"
import { WinnerModal } from "./components/WinnerModal"
import { Square } from "./components/Square"
import { Game } from "./components/Game"








function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  // console.log(board
   
  const [turn, setTurn] = useState(TURNS.x)

  const [winner, setWinner] = useState(null) // null no hay ganador y false empate

 
  const resetGame = () => {
   setBoard(Array(9).fill(null))
   setTurn(TURNS.x)
   setWinner(null)
  }
  
  

 
  const updateBoard = (index) => {
    // Aca evitamos que el index se vuelva a reescribir y si gano alguien
    if(board[index] || winner) return 
    
    // Aca creamos una copia del board y actualizamos el state con el valor del turn 
    const newBoard = [...board]
     newBoard[index] = turn
     setBoard(newBoard)

    // cambiar de turno entre x y o
     const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x 
     setTurn((prevTurn) => newTurn)
     // guardar la partida aca 
     
    // revisamos si hay un gandaor
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // signigica que hubo un empata
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe Game</h1>
      <button onClick={resetGame}>Reset Game</button>
      
      <Game board={board} updateBoard={updateBoard}/>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
