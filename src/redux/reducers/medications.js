import {ADD_MEDICATION} from "../types/types.js"


 const medications = (state=["dolo", "paracitamol"], action)=>{

    switch (action.type) {
        case ADD_MEDICATION:
            return state;
            break;
    
        default:
            return state
            break;
    }
}

export default medications;