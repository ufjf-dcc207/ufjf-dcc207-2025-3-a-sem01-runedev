import type { LinhaType } from "./App";
import "./linha.css";

type LinhaProps = {
  linha: LinhaType;
};

export default function Linha({ linha }: LinhaProps) {
  return (
    <li className="linha">
      <h2 className="linha-title">{linha.nome} - {linha.tipo} - {linha.regiao}</h2>

      <ul className="campeoes">
        {linha.campeaoCard.map((card) => {
          return (
            <li className="campeao-card" key={card.id}>
              <div className="campeao-texto">{card.texto}</div>
              <div className="campeao-dano">Tipo de Dano: {card.tipoDano}</div>
            </li>
          )
        })}
      </ul>
    </li>
  );
}
