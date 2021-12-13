import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    const isEditingHandler = () => {
        setIsEditing(true);
    }
    const cancelEditHandler = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseSaveHandler} onCancel={cancelEditHandler}/>}
    </div>
}

export default NewExpense;