export interface ExpenseValue {
    amount: number;
    transactionTitle: string;
}

class Expense {
    static lastId = 0;

    private _expenseId: number;

    constructor(public transactionTitle: string, private _amount: number) {
        this.validateExpenseInstance(transactionTitle, _amount);

        this._amount = this.saveNumberWithoutDecimals(_amount);
        this.transactionTitle = transactionTitle;
        this._expenseId = ++Expense.lastId;
    }

    private saveNumberWithoutDecimals = (amount: number) => +(amount * 100).toFixed();

    private validateExpenseInstance = (transactionTitle: string, amount: number) => {
        if (transactionTitle.length < 5) throw new Error('The title should have at least 5 characters');
        if (amount <= 0) throw new Error('Amount should be greater than 0');
    };

    get id() {
        return this._expenseId;
    }

    get amount() {
        return this._amount / 100;
    }

    public getAmoutForCalculations() {
        return this._amount;
    }
}

export default Expense;
