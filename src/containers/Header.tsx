import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import FlexWrapper from '../components/wrappers/FlexWrapper.styles';
import { RootStoreContext } from '../store/RootStoreContext';
import ChangeExchangeRateForm from './ChangeExchangeRateForm';

const Header: FC = observer(() => {
    const { exchangeRateStore } = useContext(RootStoreContext);

    return (
        <FlexWrapper justifyContent="space-between" alignItems="center">
            <h1>List of expenses</h1>
            <FlexWrapper>
                <ChangeExchangeRateForm />
                <p>1 EUR = {exchangeRateStore.eur} PLN</p>
            </FlexWrapper>
        </FlexWrapper>
    );
});

export default Header;
