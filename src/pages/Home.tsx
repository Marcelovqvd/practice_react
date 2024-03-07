import { createContext, useState } from "react";
import { coffes } from "../../data.json";
import Card from "../components/Card";
import Header from "../components/Header";
import Cart from "../components/Cart";

interface OderedContextInterface {
  orderedCount: number;
  setOrderedCount: (count: number) => void;
}

export const OrderContext = createContext({} as OderedContextInterface);

export default function Home() {
  const [orderedCount, setOrderedCount] = useState(0);

  return (
    <div>
      <OrderContext.Provider value={{ orderedCount, setOrderedCount }}>
        <Header />
        <p>Coffes List</p>
        <ul>
          {coffes.map((coffe) => {
            return <Card {...coffe} />;
          })}
        </ul>
        <Cart />
      </OrderContext.Provider>
    </div>
  );
}
