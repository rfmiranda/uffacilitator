import React, { Component } from 'react';
import { connect } from 'react-redux';

const Galeria = ({ rState }) =>  {
    return (
      <div>Galeria</div>
    );  
}

export default connect( state => ({ rState: state}))(Galeria);
