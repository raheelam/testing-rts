import React from 'react';
import Board from './Board/Board';
import {connect} from 'react-redux';
import {setUser, resetBoard, resetMatches} from '../actions';

const App = ({setUser, user, resetBoard, resetMatches}) =>{
    return(
        <div className="container w-screen mx-auto h-screen">
        { !user &&
            <div>
                <h1>Welcome select what you want to play as</h1>
                <button onClick={()=>setUser("X")}>X</button> OR <button onClick={()=>setUser("Y")}>Y</button>
            </div>
        }
        { user &&
            <div>
                <h1>You are Playing as <b>{user}</b></h1> 
                <p>Round: 0</p>
                <p>Score: 0</p>
                <button onClick={()=>{setUser(""); resetBoard(); resetMatches();}}>Reset</button>
                
            </div>
        }
        
            <Board />

        </div>
        
    );
}
const mapStateToProps = (state) =>{
    return{
        user: state.user
    }   
}

export default connect(mapStateToProps, {setUser,resetMatches, resetBoard})(App);