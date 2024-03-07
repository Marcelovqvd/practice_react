import { useContext } from "react";
import { OrderContext } from "../../pages/Home";

export default function Cart() {
  const orderedCount = useContext(OrderContext);

  return (
    <div style={{ background: "white" }}>
      <h1>Cart</h1>
      <h3>chosen: {orderedCount.orderedCount}</h3>
    </div>
  );
}
