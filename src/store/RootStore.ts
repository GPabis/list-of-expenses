import ExchangeRate from './ExchangeRate/ExchangeRate';
import ExpensesStore from './Expenses/ExpensesStore';

class RootStore {
    expensesStore: ExpensesStore;
    exchangeRateStore: ExchangeRate;

    constructor() {
        this.expensesStore = new ExpensesStore(this);
        this.exchangeRateStore = new ExchangeRate();
    }
}

export default RootStore;
