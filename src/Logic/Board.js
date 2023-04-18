import { WINNING_COMBOS } from "../components/Constans";


export  const checkWinnerFrom = (boardCheck) => {
    // revisamos todas las condiciones del Winnig Combinations 
    // para ver si x u o gano 
    for (const combination of WINNING_COMBOS) {
      const [a, b, c] = combination;
      if (boardCheck[a] &&
         boardCheck[a] === boardCheck[b] &&
         boardCheck[a] === boardCheck[c]) {
        return boardCheck[a];
      }
    }
    // si no gana nadie retornamos null
    return null;
  };


  export const checkEndGame = (newboard) => {
    return newboard.every(square => square !== null)
  
  }
  