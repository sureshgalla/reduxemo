import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPatient, onDelete, fetchPatients } from '../redux/actions/patientsActions';

 class List extends Component {
    state={
      currentPatient:""
    }
    componentDidMount = () => {
      this.props.fetchPatients();
    }
  onTextChange = (e)=>{
    this.setState({currentPatient:e.target.value})
  }
  addPatient=()=>{
    this.props.addPatient(this.state.currentPatient)
  }
  onDelete = (e)=>{
    this.props.onDelete(Number(e.target.id));
  }
  render() {
    return (
      <div>
        <input onChange={this.onTextChange} />
        <button onClick={this.addPatient}> add</button>
       {this.props.patients.map((patient,i)=> <h1 key={i}>{patient.name}<button id={i} onClick={this.onDelete}>x</button></h1>)}
       
      </div>
    )
  }
}


const mapStateToProps = ({patients,medications})=>{
    
    return {
      patients,
      medications
    }
}


export default connect(mapStateToProps,{addPatient,onDelete, fetchPatients})(List);
