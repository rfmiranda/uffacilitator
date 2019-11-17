import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import Axios from 'axios';

function Disciplina({rState}) {
  const [state, setState] = useState({
    columns: [
      // {title: 'Id', field: 'id', cellStyle:{ width: "1px"}},
      {title: 'Nome', field: 'nome'},
    ],
    data: [],
  });

  function _getDisciplinas() {    
    Axios.get('/api/disciplinas', 
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        const data = response.data        
        setState(prevState => { 
          return { ...prevState, data };
        })     
      });
  }

  function _createdDisciplinas(dados) {
    Axios.post('/api/disciplinas/', dados,
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        const data = response.data        
        setState(prevState => { 
          return { ...prevState, data };
        })
        _getDisciplinas();   
      });
  }

  function _editDisciplinas(newData, oldData) {
    // console.log("EDIT", newData, oldData);    
    Axios.put(`/api/disciplinas/${newData.id}/`, newData,
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        _getDisciplinas();   
      });
  }

  function _deleteDisciplinas(dado) {
    // console.log("DELETE", dado);   
    Axios.delete(`/api/disciplinas/${dado.id}/`, 
      { headers: { Authorization: `Token ${rState.auth.credencial.token}` }} )
      .then( response => {
        _getDisciplinas();   
      });
  }

  useEffect(() => {
    _getDisciplinas();
  }, []);

  return (
    <MaterialTable
      title="Lista de Disciplina"
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
              _createdDisciplinas(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _editDisciplinas(newData, oldData);
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _deleteDisciplinas(oldData);
            }, 600);
          }),
      }}
    />
  );
}

export default connect( state => ({ rState: state}))(Disciplina)
