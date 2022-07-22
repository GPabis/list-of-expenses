import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import Expense from '../store/Expenses/Expense';
import { RootStoreContext } from '../store/RootStoreContext';

const ExpensesTableElement: FC<{ expense: Expense }> = observer(({ expense }) => {
    const { expensesStore, exchangeRateStore } = useContext(RootStoreContext);

    return (
        <tr>
            <td>{expense.transactionTitle}</td>
            <td>{expense.amount}</td>
            <td>{(expense.amount * (1 / exchangeRateStore.getEurWithoutDecimal()) * 1000).toFixed(2)}</td>
            <td>
                <button onClick={() => expensesStore.removeExpenseById(expense.id)}>Delete</button>
            </td>
        </tr>
    );
});

const ExpansesTable: FC = observer(() => {
    const { expensesStore } = useContext(RootStoreContext);

    const expensesTableElements = expensesStore.expenses.map((expense) => (
        <ExpensesTableElement expense={expense} key={expense.id} />
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount(PLN)</th>
                    <th>Amount(EUR)</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>{expensesTableElements}</tbody>
        </table>
    );
});

export default ExpansesTable;
