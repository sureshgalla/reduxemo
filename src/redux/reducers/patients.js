import {ADD_PATIENT, DELETE_PATIENT, LOAD_PATIENTS} from "../types/types.js"



 const patients = (state=[], action)=>{
    
    console.log("iron leg in reducer");
    switch (action.type) {
        case ADD_PATIENT:
                return [...state, action.payload]
            break;
            case LOAD_PATIENTS: return [...state, ...action.payload];
            break;
    case DELETE_PATIENT: return state.filter((name,i)=> i!== action.payload);
    break;
        default:
            return state
            break;
    }
}

export default patients;