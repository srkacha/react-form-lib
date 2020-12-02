import React, {useState, useContext, useEffect} from 'react';
import FormContext from './context/FormContext';

type Props = {
    initialValues: {},
    onSubmit: any,
    children?: JSX.Element | JSX.Element[]
};

export const Form = ({initialValues, onSubmit, children}: Props) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(formValues);
        setFormValues(formValues);
    }

    return (
        <FormContext.Provider value={formValues}>
            <form onSubmit={onSubmitHandler}>
                {children}
            </form>
        </FormContext.Provider>
    )
};