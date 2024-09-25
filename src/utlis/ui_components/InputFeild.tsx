import React from 'react';
import { InputWrapper, IconLeft, IconRight, StyledInput } from './style';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ leftIcon, rightIcon, ...props }) => (
    <InputWrapper>
        {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
        <StyledInput {...props} />
        {rightIcon && <IconRight>{rightIcon}</IconRight>}
    </InputWrapper>
);

export default InputField;
