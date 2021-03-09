import React from 'react';
import Board from './Board/Board';
import {connect} from 'react-redux';
import {setUser, resetBoard, resetMatches, setRound, setScore, setCurrentPlayer} from '../actions';

const App = ({setUser, matches, user, resetBoard, resetMatches,setCurrentPlayer, setScore, score, round, setRound}) =>{
  
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
                        setScore(0);
                        setRound(1);
                    }}>
                Reset
                </button>
                
            </div>
        }
        {
                    matches.length > 0 &&
                    <div className="mx-auto w-2/4 text-center">
                    <p className="bg-green-200">User Won!</p>
                    <button className=" bg-gray-100" onClick={
                    ()=>{ 
                        resetBoard(); 
                        resetMatches();
                        setRound(round + 1);
                    }}>
                     &gt; &gt;Go to Next Round 
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
        matches: state.matches
    }   
}

export default connect(mapStateToProps, {setCurrentPlayer,setRound, setScore, setUser,resetMatches, resetBoard})(App);