import React, { useContext } from 'react';
import FormContext from './context/FormContext';

type Props = {
    type: string,
    required?: boolean,
    name?: string,
    placeHolder?: string
    value?: string
};

const formInputStyle = {
    display: 'inline-block',
    width: "100%",
    padding: "10px 15px",
    marginTop: "5px",
    marginBottom: "5px"
};

const formLabelStyle = {
    paddingLeft: "5px"
}

export const FormInput = ({type, required, name, placeHolder, value}: Props) => {
    const { formValues, setFormValues } = useContext(FormContext);
    const labelValueCapitalized = name ? (name.charAt(0).toUpperCase() + name.slice(1)) : "";

    // Generating render value, also handling nested object props
    // like in onChangeHandler
    let renderValue: string;
    if (name && name.includes('.')){
        const [partOne, partTwo] = name.split('.');
        renderValue = formValues[partOne][partTwo];
    }else{
        renderValue = formValues[name];
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues = {...formValues};
        const eventValue = event.target.value;

        // Handling possible nested object props
        // For now this works only with one level of nesting
        // This only works if the 'name' prop is the same as the property structure of the
        // form state object
        if (name && name.includes('.')){
            const [partOne, partTwo] = name.split('.');
            updatedValues[partOne][partTwo] = eventValue;
        }else{
            updatedValues[name] = eventValue;
        }

        setFormValues(updatedValues);
    };

    return (
        <>
        <label style={formLabelStyle}>
            {labelValueCapitalized}
        </label>
        <input  type={type}
                required={required !== undefined ? required : false}
                name={name !== undefined ? name : ""}
                placeholder={placeHolder !== undefined ? placeHolder : ""}
                value={renderValue !== undefined? renderValue : value}
                onChange={onChangeHandler}
                style={formInputStyle}>
        </input>
        </>
    );
};