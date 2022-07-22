import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { RootStoreContext } from '../store/RootStoreContext';

const Sum: FC = observer(() => {
    const { expensesStore } = useContext(RootStoreContext);

    return (
        <p>
            Sum: {expensesStore.getSumOfExpenses()} PLN ({expensesStore.getSumInEuro()} EUR)
        </p>
    );
});

export default Sum;
