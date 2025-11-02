import type { LinhaType } from "./App";
import Card from "./Card";

type LinhaProps = {
  linha: LinhaType;
};

export default function Linha({ linha }: LinhaProps) {
  return (
    <ul className="linha">
      {linha.campeaoCard.map((card) => (
        <li key={card.id}>
          <Card card={card} />
        </li>
      ))}
    </ul>
  );
}
