import ExpenseItemDate from './ExpenseItemDate';
import './ExpenseItem.css';




import Card from '../UI/Card';
function ExpenseItem(props) {
  
 
  return(
      <li>
    <Card className="expense-item">
     <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          ${props.amount}
        </div>
      </div>
      
    </Card>
    </li>
  );  
}

export default ExpenseItem;
