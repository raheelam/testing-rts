import React from 'react';
import Board from './Board/Board';
import {connect} from 'react-redux';
import {setUser, resetBoard, resetMatches, setRound, setScore, setCurrentPlayer, setWinner} from '../actions';


const App = ({setUser,setWinner, user, resetBoard, resetMatches,setCurrentPlayer, setScore, score, round, setRound}) =>{
  
    return(
        <div className="container w-screen mx-auto h-screen">
        { !user &&
            <div>
                <h1>Welcome select what you want to play as</h1>
                <button onClick={()=>{setUser("X"); setCurrentPlayer("X")}}>X</button> OR <button onClick={()=>{setUser("Y");setCurrentPlayer("Y")}}>Y</button>
            </div>
        }
        { user &&
            <div>
                <h1>You are Playing as <b>{user}</b></h1> 
                <p>Round: {round}</p>
                <p>Score: {score}</p>
                <button onClick={
                    ()=>{
                        setUser(""); 
                        resetBoard(); 
                        resetMatches();
                        setWinner("");
                        setScore(0);
                        setRound(1);
                    }}>
                Reset
                </button>
                
            </div>
        }
      
            <Board />

        </div>
        
    );
}
const mapStateToProps = (state) =>{
    console.log(state.user.round);
    return{
        user: state.user.user,
        score: state.user.score,
        round: state.user.round,
        matches: state.matches,
        
    }   
}

export default connect(mapStateToProps, {setWinner, setCurrentPlayer,setRound, setScore, setUser,resetMatches, resetBoard})(App);