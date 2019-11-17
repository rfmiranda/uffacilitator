import React from 'react';
import { connect } from 'react-redux';

const Home = ({ rState }) =>  {
  const { auth } = rState;  
  
    return (
    <div>{`Olá ${auth.credencial.nome}`}</div>
    );  
}

export default connect( state => ({ rState: state }))(Home);
