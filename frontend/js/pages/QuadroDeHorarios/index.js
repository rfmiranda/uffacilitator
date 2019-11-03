import React, { Component } from 'react';
import { connect } from 'react-redux';

const QuadroDeHorarios = ({ rState }) =>  {
    return (
      <div>QuadroDeHorarios</div>
    );  
}

export default connect( state => ({ rState: state}))(QuadroDeHorarios);
