import React, { useCallback, useEffect} from 'react';

import Button from '../Button/Button';
import {connect} from 'react-redux';

import {setMatches} from '../../actions';

const scoreCombinations = [
    [1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3]
];
const Board = ({board, matches, setMatches}) =>{
    
//FOR CHECKING if there is a score
const aScore = useCallback((pos1, pos2, pos3) =>{
    if(board[pos1-1].value === board[pos2-1].value && board[pos2-1].value === board[pos3-1].value && (board[pos1-1].value !== "")){
        return true;
    }else{
        return false;
    }
},[board])

const sM = useCallback((temp)=>{
    if(temp.length > 0){
        setMatches(temp)
    }  
},[setMatches]);

useEffect(()=>{
    let temp = [];
    for(let combo of scoreCombinations){
        if(aScore(combo[0],combo[1],combo[2])){
            temp = [...combo];
            break;
        }
    }
        sM(temp);
},[matches, sM, aScore]);

   const disabled = () =>{
       if(matches.length > 0){
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
    const getBoxes = () =>{
      return board.map((box,index) => <Button key={index+1} boxId={index + 1} boxValue={box.value} matchesColor={matched(index+1)} disabled={disabled()} />);
    }
    return(
        <div className="grid grid-cols-3 w-1/4 h-2/4 border-2 bg-black m-auto my-20" title="board"> 
            {getBoxes()}
        </div>  
    );
};

const mapStateToProps = (state) =>{
    return{
        board: state.board,
        matches: state.matches
    
    }
}

export default connect(mapStateToProps,{setMatches})(Board);