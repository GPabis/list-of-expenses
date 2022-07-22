import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { FC, useContext, useState } from 'react';
import { number, object } from 'yup';
import InputField from '../components/FormField/InputField';
import FlexWrapper from '../components/wrappers/FlexWrapper.styles';
import { fixInputNumberValueToThreeDecimals } from '../helpers/formHelpers';
import { RootStoreContext } from '../store/RootStoreContext';

interface InitialExchangeRateValue {
    eur: number;
}

const ChangeExchangeRateForm: FC = observer(() => {
    const [showChangeEuroForm, setShowChangeEuroForm] = useState(false);
    const { exchangeRateStore } = useContext(RootStoreContext);

    const initialValue: InitialExchangeRateValue = { eur: exchangeRateStore.eur };

    const onSubmitHandler = (values: InitialExchangeRateValue) => {
        exchangeRateStore.eur = values.eur;
        setShowChangeEuroForm(false);
    };

    const exchangeFormSchema = object<InitialExchangeRateValue>({
        eur: number().required().min(0.01),
    });

    return (
        <>
            {!showChangeEuroForm && <button onClick={() => setShowChangeEuroForm(true)}>Edit Exchange Rate</button>}
            {showChangeEuroForm && (
                <FlexWrapper justifyContent="center" alignItems="center">
                    <Formik
                        initialValues={initialValue}
                        onSubmit={onSubmitHandler}
                        validationSchema={exchangeFormSchema}
                    >
                        <Form>
                            <InputField name="eur" label="Euro" onChange={fixInputNumberValueToThreeDecimals} />
                            <button type="submit">Change</button>
                        </Form>
                    </Formik>
                </FlexWrapper>
            )}
        </>
    );
});

export default ChangeExchangeRateForm;
