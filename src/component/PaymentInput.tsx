import React from 'react';
import { InputField, InputWrapper, Label } from './style';

interface TextInputProps {
    label: string;
    width?: string;
    value?:string
}

const PaymentInput: React.FC<TextInputProps> = ({ label, width, value }) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputField type="text"  width={width} value={value}/>
        </InputWrapper>
    );
};

export default PaymentInput;
