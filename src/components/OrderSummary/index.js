import Button from '../general/Button';
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
      <strong>Захиалгын дүн: {props.totalPrice}₮</strong>
    </p>
    <p>Цаашаа үргэлжлүүлэх үү?</p>
    <Button onClicked={props.close} btnType='Danger' btnName='ТАТГАЛЗАХ' />
    <Button
      onClicked={props.continueOrder}
      btnType='Success'
      btnName='ҮРГЭЛЖЛҮҮЛЭХ'
    />
  </div>
);

export default OrderSummary;
