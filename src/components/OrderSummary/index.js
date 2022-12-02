import css from './style.module.css';

const OrderSummary = (props) => (
  <div className={css.OrderSummary}>
    <h3>Таны захиалгa</h3>
    <p>Таны сонгосон орцууд:</p>
    <ul>
      {Object.entries(props.ingredients).map((el) => (
        <li key={el}>{`${props.ingredientNames[el[0]]} : ${el[1]}`}</li>
      ))}
    </ul>
    <p>
      Нийт үнэ: <strong>{props.totalPrice}</strong>
    </p>
    <p>Цаашаа үргэлжлүүлэх үү?</p>
  </div>
);

export default OrderSummary;
