import React, { useState } from 'react';
import FormContext from './context/FormContext';

type Props = {
    initialValues: {},
    onSubmit: any,
    children?: JSX.Element | JSX.Element[]
};

export const Form = ({initialValues, onSubmit, children}: Props) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        // Logging the submitted data to alert box
        window.alert(JSON.stringify(formValues));
        onSubmit(formValues);
    }

    return (
        <FormContext.Provider value={{formValues, setFormValues}}>
            <form onSubmit={onSubmitHandler}>
                {children}
            </form>
        </FormContext.Provider>
    )
};