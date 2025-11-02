import type { LinhaType } from "./App";

type LinhaProps = {
  linha: LinhaType;
};

export default function Linha({ linha }: LinhaProps) {
  return (
    <ul className="linha">
        <h2>{linha.nome} - {linha.tipo} - {linha.regiao}</h2>
        {linha.campeaoCard.map((card) => {
           return (
             <li >
               <h3>Tipo de Dano: {card.tipoDano}</h3>
             </li>
           )
        })}
    </ul>
  );
}
