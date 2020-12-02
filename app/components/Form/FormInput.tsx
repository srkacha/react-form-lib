import React, {useState, useContext, useEffect} from 'react';
import FormContext from './context/FormContext';

type Props = {
    type: string,
    required?: boolean,
    name?: string,
    placeHolder?: string
    value?: string
};

export const FormInput = ({type, required, name, placeHolder, value}: Props) => {
    const contextValues = useContext(FormContext);
    const contextValue = contextValues[name];
    const [inputValue, setInputValue] = useState(contextValue?contextValue:value);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
    return (
        <input type={type} 
                required={required !== undefined ? required : false} 
                name={name !== undefined ? name : ""} 
                placeholder={placeHolder !== undefined ? placeHolder : ""} 
                value={inputValue}
                onChange={onChangeHandler}>
        </input>
                    
    );
};