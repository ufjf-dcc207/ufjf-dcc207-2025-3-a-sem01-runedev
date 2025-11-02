import './App.css'
import KanbanBord from './KanbanBord';
import json from './data.json';

const data = json as  KanbanBordType;

export type KanbanBordType = {
  projeto: string,
  linha: Array<LinhaType>;
}
export type LinhaType = {
  nome: string,
  tipo: string,
  regiao: string,
  campeaoCard: Array<CardType>;
}

export type CardType = {
  id: string,
  imagemUrl: string,
  texto: string,
  tipoDano: string,
}

function App() {

  return (
      <KanbanBord quadro={data} />
  )
}

export default App
