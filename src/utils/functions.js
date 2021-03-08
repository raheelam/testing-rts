

  const temp = [];
//initializes board with 9 empty boxes
   for(let i = 1; i<=9; i++){
        temp.push({value: ""});
     }

     export const board = temp;

//helper function for putting values to boxes in board
//s == starting, e == end
export const setBox = (v, s, e)=>{
    //uses e only for testing shortcut
    if((v === "X" || v === "O") && s <= board.length && (e?e <= board.length:true)){
        for(let i=s; i<= (e?e:s) ; i++){
            if(board[i-1].value === ""){
               board[i-1].value = v;
            } 
        }
        return true;
    }  
    return false;
}


setBox(1,1);
setBox(4,4);
setBox(7,7);
//FOR TESTING SAKE
export const resetBox = (s, e)=>{
    if(s <= board.length && (e?e <= board.length:true)){
        for(let i=s; i<= (e?e:s) ; i++){
            board[i-1].value = "";
        }
        return true;
    }  
    return false;
}
  //FOR CHECKING if there is a score
export const aScore = (pos1, pos2, pos3) =>{
    if(board[pos1-1].value === board[pos2-1].value && board[pos2-1].value === board[pos3-1].value){
        return true;
    }else{
        return false;
    }
}

export const tictactoe = (id) =>{
    if(board[id-1].value !== ""){
        if( aScore(1,4,7) || aScore(2,5,8) || aScore(3,6,9)){
           console.log('yass you have won vertically');
        }else if( aScore(1,2,3) || aScore(4,5,6) || aScore(7,8,9)){
            console.log('yass you have won horizontally');
        }else if( aScore(1,5,9) || aScore(7,5,3) ){
            console.log('yass you have won diagonally');
        }
    }

}  

