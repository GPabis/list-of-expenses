import { FC } from 'react';
import AppWrapper from './components/wrappers/AppWrapper.styles';
import AddExpanseForm from './containers/AddExpanseForm';
import ExpansesTable from './containers/ExpansesTable';
import Header from './containers/Header';
import Sum from './containers/Sum';
import RootStoreProvider from './store/RootStoreContext';

const App: FC = () => {
    return (
        <RootStoreProvider>
            <AppWrapper>
                <Header />
                <AddExpanseForm />
                <ExpansesTable />
                <Sum />
            </AppWrapper>
        </RootStoreProvider>
    );
};

export default App;
