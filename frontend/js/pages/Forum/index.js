import React, { Component } from 'react';
import { connect } from 'react-redux';

const Forum = ({ rState }) =>  {
    return (
      <div>Forum</div>
    );  
}

export default connect( state => ({ rState: state}))(Forum);
