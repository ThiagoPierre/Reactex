import React from 'react';
import CaixaGrupo from '../components/Cards/Card_grupo';

const nomes = ['Thiago Barboza Pierre',
  'Tiago Netto',
  'Diogo Souza',
  'Alan Brito',
  'Augusto Falcão'];

const Sobre = () => (
  <div>
    <CaixaGrupo
      nomes={nomes}
      cardTitle="Nomes"
    />
  </div>
);

export default Sobre;
