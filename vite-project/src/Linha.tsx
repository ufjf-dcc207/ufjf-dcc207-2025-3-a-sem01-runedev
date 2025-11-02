import type { LinhaType } from "./App";
import "./linha.css";

type LinhaProps = {
  linha: LinhaType;
};

export default function Linha({ linha }: LinhaProps) {
  return (
    <li className="linha">
      <h2 className="linha-title">
        {linha.nome}
      </h2>
        <div className="linha-regiao">Região: {linha.regiao}</div>
      <ul className="campeoes">
        {linha.campeaoCard.map((card) => {
          return (
            <li className="campeao-card" key={card.id}>
              <img
                src={card.imagemUrl}
                alt={card.texto}
                className="campeao-imagem"
              />
              <div className="campeao-tipo">{linha.tipo}</div>
              <div className="campeao-dano">Tipo de Dano: {card.tipoDano}</div>
              
            </li>
          );
        })}
      </ul>

      
    </li>
  );
}
