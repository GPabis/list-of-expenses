import { makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

import Expense, { ExpenseValue } from './Expense';

class ExpensesStore {
    private _expenses: Expense[] = [];

    constructor(private rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    public get expenses() {
        return this._expenses;
    }

    public addExpense(expense: ExpenseValue) {
        this._expenses = [...this.expenses, new Expense(expense.transactionTitle, expense.amount)];
    }

    public removeExpenseById(id: number) {
        this._expenses = this._expenses.filter((expense) => expense.id !== id);
    }

    public getSumOfExpenses() {
        return this._expenses.reduce((acc, val) => (acc += val.getAmoutForCalculations()), 0) / 100;
    }

    public getSumInEuro() {
        return this._expenses
            .reduce(
                (acc, val) =>
                    (acc += +(
                        val.getAmoutForCalculations() *
                        ((1 / this.rootStore.exchangeRateStore.getEurWithoutDecimal()) * 10)
                    ).toFixed(2)),
                0,
            )
            .toFixed(2);
    }
}

export default ExpensesStore;
