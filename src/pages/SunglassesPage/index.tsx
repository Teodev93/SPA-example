import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../../components/Card";

const SunglassesPage = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(
      "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div className="container">
      {cards.map((el: any) => {
        return <Card key={`card-${uuidv4()}`} singleCard={el} />;
      })}
    </div>
  );
};

export default SunglassesPage;
