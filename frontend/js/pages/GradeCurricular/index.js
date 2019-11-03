import React, { Component } from 'react';
import { connect } from 'react-redux';

const GradeCurricular = ({ rState }) =>  {
    return (
      <div>GradeCurricular</div>
    );  
}

export default connect( state => ({ rState: state}))(GradeCurricular);
