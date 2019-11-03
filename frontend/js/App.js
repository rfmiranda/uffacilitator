import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Disciplina from './pages/Disciplina';
import QuadroDeHorarios from './pages/QuadroDeHorarios';
import GradeCurricular from './pages/GradeCurricular';
import Sistemas from './pages/Sistemas';
import Repositorio from './pages/Repositorio';
import Galeria from './pages/Galeria';
import Forum from './pages/Forum';
import SentryBoundary from './utils/SentryBoundary';

import Menu from './app/home/menu';
import NavBar from './app/home/navbar';
import { flexbox } from '@material-ui/system';

function getProtectedRoute( path, component, window, state ) {
  const bypass = [
    '/'
  ];
  const verificaRota = bypass.indexOf(window.location.pathname);

  if(!state.auth.status && verificaRota === -1 ) {
    return <Redirect exact path={path} to="/" />;
  }
  return <Route exact path={path} component={component} />;
}

const App = ({ state }) => {
  const path = window.location.pathname;
  return (    
    <SentryBoundary>
      <div style={{ width: "100%", height: "100%"}}>
        {state.auth.status && path !== "/" && (<NavBar />)}
        {state.auth.status && path !== "/" && (<Menu />)}
        <div style={{marginTop: 64}}>
          <Router>          
            <Route exact path="/" component={Login} />
            <Route exact path="/home/" component={Home} />
            <Route exact path="/disciplina/" component={Disciplina} />
            <Route exact path="/quadro-de-horarios/" component={QuadroDeHorarios} />
            <Route exact path="/grade-curricular/" component={GradeCurricular} />
            <Route exact path="/sistemas/" component={Sistemas} />
            <Route exact path="/repositorio/" component={Repositorio} />
            <Route exact path="/galeria/" component={Galeria} />
            <Route exact path="/forum/" component={Forum} />
          </Router>
        </div>        
      </div>      
    </SentryBoundary>
  )
};

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps)(hot(module)(App));
