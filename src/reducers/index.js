import {combineReducers} from 'redux';
import {board} from '../utils/functions';


const boardReducer = (state=[...board], action) =>{
    switch(action.type){
        case "SET_BOX":
            return state.map((box,index)=> {
                if(index === action.payload.boxId - 1 ){
                    box.value = action.payload.value;
                }
                return box;
            });
        case "RESET_BOARD":
            return state.map(box=>{
                box.value="";
                return box;
            });
        default:
            return state;
    }
}

const userReducer = (state={user:"",round:1, score:0}, action) =>{
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.payload};
        case "SET_SCORE":
            return {...state, score: action.payload};
         case "SET_ROUND":
             return {...state, round: action.payload};
        case "ADD_SCORE":
            return {...state, score: state.score + 1};
        default:
            return state;
    }
}

const matchesReducer = (state=[],action) =>{
    switch(action.type){
        case "SET_MATCHES":
            return action.payload;
        case "RESET_MATCHES":
            return [];
        default:
            return state;
    }
}

const currentPlayerReducer = (state="", action) =>{
    if(action.type === "CURRENT_PLAYER"){
        return action.payload;
    }
    return state;
}

export default combineReducers({
      board: boardReducer,
      user: userReducer,
      matches: matchesReducer,
      currentPlayer: currentPlayerReducer
});