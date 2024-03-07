import { useContext, useState } from "react";
import { OrderContext } from "../../pages/Home";

interface Coffe {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export default function Card({ title, description, price }: Coffe) {
  const { orderedCount, setOrderedCount } = useContext(OrderContext);
  const [count, setCount] = useState(0);

  function handleClick() {
    setOrderedCount(orderedCount + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <strong>R${price}</strong>
      <p>qtd: {count}</p>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
