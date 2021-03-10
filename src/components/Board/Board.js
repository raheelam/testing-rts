import React, { useCallback, useEffect} from 'react';

import Button from '../Button/Button';
import {connect} from 'react-redux';

import {setMatches,setWinner,setRound, resetMatches, resetBoard, addScore,setBox, setCurrentPlayer } from '../../actions';
import { } from '../../utils/functions';

const scoreCombinations = [
    [1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3]
];
const Board = ({board,winner, resetBoard, resetMatches, setRound, round,  setWinner, setBox, matches,setCurrentPlayer, currentPlayer, setMatches, user, addScore}) =>{

// HELPER FUNCTIONS FOR COMPUTER's TURN
const generateGame = () =>{
    let temp = [];
    for(let i=0; i<board.length; i++){
        if(board[i].value === ""){
         temp.push(i+1);
        }
    }
    let rand = Math.floor(Math.random() * temp.length);
    let choos = temp[rand];
    return choos;
}

const computerTurn =() =>{
    if(currentPlayer !== user && user !== "" && matches.length <= 0){
        setBox(currentPlayer, generateGame()); 
        setCurrentPlayer(user);
    }
}
// END OF HELPER FUNCTIONS FOR COMPUTER's TURN
useEffect(()=>{  
    computerTurn();
});


//FOR CHECKING if there is a score
const aScore = useCallback((pos1, pos2, pos3) =>{
    if(board[pos1-1].value === board[pos2-1].value && board[pos2-1].value === board[pos3-1].value && (board[pos1-1].value !== "")){
        setMatches([pos1,pos2,pos3]);
        setWinner(board[pos1-1].value);
        if(user === winner){
            addScore();
        }
        return true;
    }else{
        return false;
    }
},[board, setMatches,winner, addScore, setWinner, user]);
useEffect(()=>{
    for(let combo of scoreCombinations){
        if(aScore(combo[0],combo[1],combo[2])){
            break;
        }
    }
},[aScore]);




   const disabled = () =>{
       if(matches.length > 0|| user==="" || user !== currentPlayer){
           return true;
       }
       return false;
   }
   const ticked = (i) => {
       if(board[i].value !== ""){
           return true;
       }
       return false;
   }
   const matched = (boxId) =>{
       if(matches.includes(boxId)){
           return "bg-green-400"
       }
       return "";
   }
   //GET BOXES TO DISPLAY ON BOARD
   const getBoxes = () =>{
      
      return board.map((box,index) => <Button key={index+1} boxId={index + 1} boxValue={box.value} matchesColor={matched(index+1)} disabled={disabled() || ticked(index)} />);
    }


    return(
        <>
        {
            //turn this into a component later
            (matches.length > 0 || (board.filter(x => x.value ==="").length <= 0  && user !== "")) &&
            <div className="mx-auto w-2/4 text-center">
            {
                winner === "" && 
               <p className="bg-green-200">{"It's a tie!"} </p>
            
            }
            {
              user === winner && winner !== "" &&
              <p className="bg-green-200">{"You Won!"} </p>
            }
            {
              user !== winner && winner !== "" &&
              <p className="bg-red-200">{"You Lose!"} </p>
            }
            
            <button className=" bg-gray-100" onClick={
            ()=>{ 
                resetBoard(); 
                resetMatches();
                setWinner("");
                setRound(round + 1);
            }}>
             &gt; &gt;Go to Next Round 
            </button>
            </div>
            
            
    }
        <div className="grid grid-cols-3 w-2/4 sm:w-1/4 h-2/4 border-2 bg-black m-auto my-10" title="board"> 
            {getBoxes()}
        </div>  
    </>
    );
};

const mapStateToProps = (state) =>{
    return{
        board: state.board,
        matches: state.matches,
        user: state.user.user,
        currentPlayer: state.currentPlayer,
        winner: state.winner,
        round: state.user.round
    
    }
}

export default connect(mapStateToProps,{setWinner, setMatches,addScore, setCurrentPlayer, setBox,resetBoard, resetMatches, setRound})(Board);