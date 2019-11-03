import React from 'react';
import {connect} from 'react-redux';

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

import { consoleSandbox } from '@sentry/utils';

import * as MenuActions from '../../../store/actions/menu';
import * as StyleComponents from '../style';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



function Menu({ menuState, toggleDrawer }) {
  const classes = useStyles();
  // const toggleDrawer = (side, open) => event => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [side]: open });
  // };

  const sideList = side => {
    const menuItem = [
      'Disciplina', 
      'Quadro de horários', 
      'Grade curricular', 
      'Sistemas',
      'Repositório',
      'Galeria',
      'Fórum'
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
            <span>João Pedro</span>
            Engenharia Civil
            joao@id.uff.br
          </StyleComponents.DivPerfilDetalhes>
        </StyleComponents.DivPerfil>
        <Divider />
        <List>
          {menuItem.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
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

const mapStateToProps = ({ menu }) => ({ menuState: menu });

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (side, open) => dispatch(MenuActions.toggleDrawer(side, open ))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
