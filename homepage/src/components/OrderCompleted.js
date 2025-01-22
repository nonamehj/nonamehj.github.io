import { useGlobalContext } from "../context";
import "./OrderCompletedStyle.css";
const OrderCompleted = () => {
  const { isOrderCompleted, finalCompletedOrder, table } = useGlobalContext();
  return (
    <section className={isOrderCompleted ? "completed-items" : "order"}>
      <div className="order-container">
        <h2>테이블번호 {table}</h2>
        <div className="completed-center">
          <p>주문이 완료되었습니다.</p>
        </div>
        <button className="complete-btn" onClick={finalCompletedOrder}>
          <h2>주문완료</h2>
        </button>
      </div>
    </section>
  );
};

export default OrderCompleted;
