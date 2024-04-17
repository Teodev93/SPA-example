import "./styles.css";

interface singleCard {
  name: String;
}

const Card = ({ singleCard }: { singleCard: singleCard }) => {
  const { name } = singleCard;
  return (
    <div className="card">
      <img src="https://placehold.co/600x400/EEE/31343C" alt={`${name}`} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
