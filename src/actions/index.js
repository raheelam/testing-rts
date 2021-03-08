export const setBox = (value, boxId) =>{
    return{
        type: "SET_BOX",
        payload: {value: value, boxId:boxId}
    }
}

export const setUser = (user) =>{
    return{
        type: "SET_USER",
        payload: user
    }
}

export const resetBoard = () =>{
    return{
        type: "RESET_BOARD"
    }
}

export const setMatches=(matches)=>{
    return{
        type: "SET_MATCHES",
        payload: matches
    }
}

export const resetMatches=()=>{
    return{
        type: "RESET_MATCHES"
    }
}
