import React from 'react';
import {connect} from 'react-redux';
import {setBox} from '../../actions';

//import {tictactoe, aScore } from '../../utils/functions';

const Button = ({boxId, boxValue, setBox, user, matchesColor, disabled}) =>{

    const btnClasses =   "border-2 text-white " +  matchesColor;
    const onClickHandler = () =>{
        if(!disabled){
            setBox(user,boxId); 
        }
        
    }
    return(
        <button id={boxId} onClick = {onClickHandler} title={`Box${boxId}`} className = {btnClasses} data-testid={boxId}>
            {boxValue}
        </button>
    );
}

const mapStateToProps = (state) =>{
    return{
        user: state.user.user
    }
}

export default connect(mapStateToProps,{setBox})(Button);