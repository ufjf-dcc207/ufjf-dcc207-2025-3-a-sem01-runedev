import type { KanbanBordType } from "./App";
import Linha from "./Linha";

type KanbanBordProps = {
  quadro: KanbanBordType;
};

export default function KanbanBord({ quadro }: KanbanBordProps) {
    return (
      <div className="Kanban-bord">
        <h1>{quadro.projeto}</h1>

        <div className="linhas">
          {quadro.linha.map((linha) => {
             return <Linha key={linha.nome} linha={linha} />
          })}
        </div>
      </div>
    );
}