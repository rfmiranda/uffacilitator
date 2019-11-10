import React, { Component } from 'react';
import { connect } from 'react-redux';

const Disciplina = ({ rState }) =>  {
    return (
      <div>Disciplina</div>
    );  
}

export default connect( state => ({ rState: state}))(Disciplina);
