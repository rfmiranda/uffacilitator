import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import Axios from 'axios';

function Sistemas({rState}) {
  const [state, setState] = useState({
    columns: [
      // {title: 'Id', field: 'id', cellStyle:{ width: "1px"}},      
      {title: 'Url', field: 'url'},
      {title: 'Descrição', field: 'descricao'},
    ],
    data: [],
  });

  function _get() {    
    Axios.get('/api/sistemas', 
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        const data = response.data        
        setState(prevState => { 
          return { ...prevState, data };
        })     
      });
  }

  function _created(dados) {
    Axios.post('/api/sistemas/', dados,
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        const data = response.data        
        setState(prevState => { 
          return { ...prevState, data };
        })
        _get();   
      });
  }

  function _edit(newData, oldData) {
    // console.log("EDIT", newData, oldData);    
    Axios.put(`/api/sistemas/${newData.id}/`, newData,
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        _get();   
      });
  }

  function _delete(dado) {
    // console.log("DELETE", dado);   
    Axios.delete(`/api/sistemas/${dado.id}/`, 
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        _get();   
      });
  }

  useEffect(() => {
    _get();
  }, []);

  return (
    <MaterialTable
      title="Lista de Sistemas"
      columns={state.columns}
      data={state.data}
      localization={{
          pagination: {
              labelDisplayedRows: '{from}-{to} de {count}',
              labelRowsSelect: 'linhas'
          },
          toolbar: {
            nRowsSelected: '{0} linha(s) seleciona(s)',
            searchTooltip: 'Pesquisar',
            searchPlaceholder: 'Pesquisar'
          },
          header: {
              actions: 'Ações'
          },
          body: {
            addTooltip: 'Adicionar',
            deleteTooltip: 'Deletar',
            editTooltip: 'Editar',            
            emptyDataSourceMessage: 'Nenhum registros encotrado',
            filterRow: {
                filterTooltip: 'Filtrar',
                cancelTooltip: 'Cancelar',
                saveTooltip: 'Salvar'
            },
            editRow: {
              deleteText: "Tem certeza que deseja apagar?",
              saveTooltip: 'Salvar',
              cancelTooltip: 'Cancelar',
            }
          }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _created(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _edit(newData, oldData);
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _delete(oldData);
            }, 600);
          }),
      }}
    />
  );
}

export default connect( state => ({ rState: state}))(Sistemas)
