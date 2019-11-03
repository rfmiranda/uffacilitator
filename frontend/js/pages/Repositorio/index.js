import React, { Component } from 'react';
import { connect } from 'react-redux';

const Repositorio = ({ rState }) =>  {
    return (
      <div>Repositorio</div>
    );  
}

export default connect( state => ({ rState: state}))(Repositorio);
