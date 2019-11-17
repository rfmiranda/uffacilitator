import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { History as history } from '../../../utils'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountBox from '@material-ui/icons/AccountBox';

import * as MenuActions from '../../../store/actions/menu';
import * as StyleComponents from '../style';
import Axios from 'axios';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Menu({ menuState, toggleDrawer, authState }) {
  const classes = useStyles();
  const [curso, setCurso] = useState('');
  
  function Redirect(to) {
    history.push(to)
  }

  function _getCurso(){
    Axios.get('/api/cursos', 
      { headers: { Authorization: `Token ${authState.credencial.token}` }} )
      .then( response => {
        const data = response.data       
        
        if(data.length > 0 ){
          setCurso(data[0].nome) 
        }            
      });
  }

  useEffect(() => {
    _getCurso();
  }, []);

  const sideList = side => {
    const menuItem = [
      { nome: 'Disciplina', to: '/disciplina/' }, 
      // { nome: 'Quadro de horários', to: '/quadro-de-horarios/' } , 
      // { nome: 'Grade curricular', to: '/grade-curricular/' }, 
      { nome: 'Sistemas', to: '/sistemas/' },
      { nome: 'Repositório', to: '/repositorio/' },
      // { nome: 'Galeria', to: '/galeria/' },
      { nome: 'Fórum', to: '/forum/' }
    ];
    
  return (    
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(side, false)}
        onKeyDown={() => toggleDrawer(side, false)}
      >
        <StyleComponents.DivPerfil>
          <AccountBox style={{width: 80, height: 80}} />
          <StyleComponents.DivPerfilDetalhes>
            <span>{`${authState.credencial.nome}`}</span>
            {curso} <br />
            {authState.credencial.email}
          </StyleComponents.DivPerfilDetalhes>
        </StyleComponents.DivPerfil>
        <Divider />
        <List>
          {menuItem.map((item, index) => (
            <ListItem button key={item.nome} onClick={() => Redirect(item.to)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.nome} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <Drawer open={menuState.left} onClose={() => toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = ({ menu, auth }) => ({ menuState: menu, authState: auth });

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (side, open) => dispatch(MenuActions.toggleDrawer(side, open ))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
