import React from 'react';
import CaixaGrupo from '../components/Card_grupo';

const nomes = ['Thiago Barboza Pierre',
  'Tiago Netto',
  'Diogo Souza',
  'Alan Brito',
  'Augusto Falcão'];

const Grupo = () => (
  <div>
    <CaixaGrupo
      nomes={nomes}
      cardTitle="Nomes"
    />
  </div>
);

export default Grupo;
