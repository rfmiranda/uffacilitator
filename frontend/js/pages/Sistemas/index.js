import React, { Component } from 'react';
import { connect } from 'react-redux';

const Sistemas = ({ rState }) =>  {
    return (
      <div>Sistemas</div>
    );  
}

export default connect( state => ({ rState: state}))(Sistemas);
