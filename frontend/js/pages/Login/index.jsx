import React, { useState } from 'react';
import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import * as style from '../../app/login/style';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: "100%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
    height: "60px"
    
  },
}));

const Login = () => {
  // const [showBugComponent, setShowBugComponent] = useState(false);
  const classes = useStyles();
  
  function redirect() {
    window.location = '/home';
  }

  return (
    <>
      <style.BackGround>
        <style.Login>
          <style.Title>UFFacilitator</style.Title>
          <TextField
              id="outlined-search"
              label="Usuário"
              type="text"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
          />

          <TextField
              id="outlined-search"
              label="Senha"
              type="password"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
          />

          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            size="large"
            onClick={() => redirect() }>
            <b>Entrar</b>
          </Button>
        </style.Login>
      </style.BackGround>
    </>
  );
};

const mapStateToProps = state => ({ navBarState: state });

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps)(Login);
