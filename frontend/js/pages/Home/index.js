import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../app/home/menu';
import NavBar from '../../app/home/navbar';

const Home = ({ rState }) =>  {
    return (
      <div>
        <NavBar />
        <Menu />
      </div>
    );  
}

export default connect( state => ({ rState: state}))(Home);
