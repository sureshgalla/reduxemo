import { ADD_PATIENT, DELETE_PATIENT, LOAD_PATIENTS } from "../types/types"

export const addPatient = name =>{
    console.log("ironleg",name);
    return {
        type: ADD_PATIENT,
        payload: name
    }
}

export const onDelete = id=>({type:DELETE_PATIENT, payload:id})

export const loadPatients = (data)=>{
   
    return {
        type:LOAD_PATIENTS,
        payload:data
    }
}

export const fetchPatients = ()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json()).then(data=> dispatch(loadPatients(data)))
    }
}