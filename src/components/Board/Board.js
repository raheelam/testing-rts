import React, { useCallback, useEffect} from 'react';

import Button from '../Button/Button';
import {connect} from 'react-redux';

import {setMatches, addScore} from '../../actions';

const scoreCombinations = [
    [1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3]
];
const Board = ({board, matches, setMatches, user, addScore}) =>{
    
//FOR CHECKING if there is a score
const aScore = useCallback((pos1, pos2, pos3) =>{
    if(board[pos1-1].value === board[pos2-1].value && board[pos2-1].value === board[pos3-1].value && (board[pos1-1].value !== "")){
        setMatches([pos1,pos2,pos3]);
        addScore();
        return true;
    }else{
        return false;
    }
},[board, setMatches, addScore]);

useEffect(()=>{
    for(let combo of scoreCombinations){
        if(aScore(combo[0],combo[1],combo[2])){
            break;
        }
    }
},[aScore]);

   const disabled = () =>{
       if(matches.length > 0|| user===""){
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
      
      return board.map((box,index) => <Button key={index+1} boxId={index + 1} boxValue={box.value} matchesColor={matched(index+1)} disabled={disabled()} />);
    }


    return(
        <div className="grid grid-cols-3 w-1/4 h-2/4 border-2 bg-black m-auto my-10" title="board"> 
            {getBoxes()}
        </div>  
    );
};

const mapStateToProps = (state) =>{
    return{
        board: state.board,
        matches: state.matches,
        user: state.user.user
    
    }
}

export default connect(mapStateToProps,{setMatches,addScore})(Board);