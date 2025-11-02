import type { CardType } from "./App";

type CardProps = {
  card: CardType;
};

export default function Card({ card }: CardProps) {
  return (
    <div className="card">
      <h2>{card.texto}</h2>
      <progress value={card.tipoDano} max={100}>{card.tipoDano}%</progress>
    </div>
  );
}
