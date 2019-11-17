import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, withRouter } from 'react-router-dom';
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

const App = ({ state, location }) => {  
  const path = location.pathname;

  return (    
    <SentryBoundary>
      <div style={{ width: "100%", height: "100%"}}>
        {state.auth.status && path !== "/" && (<NavBar />)}
        {state.auth.status && path !== "/" && (<Menu />)}
        <div style={{marginTop: 64}}>
          <Switch>          
            <Route exact path="/" component={Login} />
            {state.auth.status ?
            <>
            <Route exact path="/home/" component={Home} />
            <Route exact path="/disciplina/" component={Disciplina} />
            <Route exact path="/quadro-de-horarios/" component={QuadroDeHorarios} />
            <Route exact path="/grade-curricular/" component={GradeCurricular} />
            <Route exact path="/sistemas/" component={Sistemas} />
            <Route exact path="/repositorio/" component={Repositorio} />
            <Route exact path="/galeria/" component={Galeria} />
            <Route exact path="/forum/" component={Forum} /> </>
            :
            <div></div> }
          </Switch>
        </div>        
      </div>      
    </SentryBoundary>
  )
};

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps)(hot(module)(withRouter(App)));
