import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';

function Disciplina() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'nome' },
    ],
    data: [
      { nome: 'Calculo 1A' },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
      {
        nome: 'Geometria Analítica'
      },
    ],
  });

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
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default connect( state => ({ rState: state}))(Disciplina)
