import { useField } from 'formik';
import { ChangeEvent, ComponentPropsWithRef, FC } from 'react';
import FlexWrapper from '../wrappers/FlexWrapper.styles';
import { Label, ErrorMessage } from './InputField.styles';

interface InputFieldProps extends ComponentPropsWithRef<'input'> {
    name: string;
    label: string;
}

const InputField: FC<InputFieldProps> = ({ name, label, onChange, ...rest }) => {
    const [field, meta] = useField(name);

    const isError = !!meta.error && meta.touched;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
        field.onChange(e);
    };

    return (
        <FlexWrapper>
            <Label htmlFor={name}>{label}</Label>
            <div>
                <input value={meta.value} onChange={onChangeHandler} name={name} {...rest} />
                {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
            </div>
        </FlexWrapper>
    );
};

export default InputField;
