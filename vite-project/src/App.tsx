import './App.css'
import KanbanBord from './KanbanBord';
import json from './data.json';

const data = json as unknown as KanbanBordType;

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
  texto: string,
  tipoDano: number,
}

function App() {

  return (
    <>
      <h1>Kanban Board de Campeões</h1>
      <KanbanBord quadro={data} />
    </>
  )
}

export default App
