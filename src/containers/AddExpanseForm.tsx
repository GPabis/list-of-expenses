import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { object, number, string } from 'yup';
import InputField from '../components/FormField/InputField';
import { fixInputNumberValue } from '../helpers/formHelpers';
import { ExpenseValue } from '../store/Expenses/Expense';
import { RootStoreContext } from '../store/RootStoreContext';

const AddExpanseForm: FC = observer(() => {
    const { expensesStore } = useContext(RootStoreContext);

    const initialValues: ExpenseValue = { transactionTitle: '', amount: 0 };

    const onSubmitHandler = (values: ExpenseValue) => expensesStore.addExpense(values);

    const expansesFormSchema = object<ExpenseValue>({
        amount: number().required().min(0.01),
        transactionTitle: string().required().trim().min(5),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                onSubmitHandler(values);
                resetForm();
            }}
            validationSchema={expansesFormSchema}
        >
            <Form>
                <InputField name="transactionTitle" label="Title of transaction" />
                <InputField name="amount" label="Amount (in PLN)" type="number" onChange={fixInputNumberValue} />
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
});

export default AddExpanseForm;
