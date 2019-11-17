import React from 'react';
import { connect } from 'react-redux';
import * as style from '../../app/login/style';
import { white } from 'color-name';


const Home = ({ rState }) =>  {
  const { auth } = rState;  
  
    return (
      <>
        <style.BackGround style={{ filter: "blur(8px)" }}>
            
        </style.BackGround>
        <div style={
              {
                position: "absolute",
                left: 50,
                bottom: 200,
                fontSize: 80,
                color: "white",
                fontWeight: "bold"
              }
            }>{`Olá ${auth.credencial.nome}!`}</div>
      </>
    );  
}

export default connect( state => ({ rState: state }))(Home);
