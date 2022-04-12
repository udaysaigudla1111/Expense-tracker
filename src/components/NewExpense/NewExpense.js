  import React,{useState }  from 'react';
import NewExpenseForm from  './NewExpenseForm';
import './NewExpense.css';
  const NewExpense = (props) =>{
        const [isEditing,setisEditing] = useState(false);

    
    
    
    
    
        const saveExpenseDataHandler = (enteredexpensedata) => {
const expensedata=
    {   
        
        ...enteredexpensedata,
        id:Math.random().toString(),
        
    };
 
props.onAddExpense(expensedata);
setisEditing(false);
};
      const startEditHandler = () => {
        setisEditing(true);
}
const stopEditHandler = () => {
    setisEditing(false);
}
      return (
          <div className="new-expense">
             {!isEditing && ( <button onClick={ startEditHandler }> Add New Expense </button> )}   
             {isEditing && (
                <NewExpenseForm onSaveExpenseData = {saveExpenseDataHandler}
                    onCancel={stopEditHandler} >
                </NewExpenseForm>
            
                )
             }
          </div>
      );
  }
  export default NewExpense;