import { useContext } from "react";
import { OrderContext } from "../../pages/Home";
import "./style.css";

export default function Header() {
  const { orderedCount } = useContext(OrderContext);

  return (
    <header>
      <p>header</p>
      <p>
        Carrinho <span>{orderedCount}</span>
      </p>
    </header>
  );
}
