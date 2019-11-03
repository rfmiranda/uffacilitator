import React, { Component } from 'react';
import { connect } from 'react-redux';

const Home = ({ rState }) =>  {
    return (
      <div>Olá João</div>
    );  
}

export default connect( state => ({ rState: state}))(Home);
