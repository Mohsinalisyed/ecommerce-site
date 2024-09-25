import React from 'react';
import { InputWrapper, IconLeft, IconRight, StyledInput } from './style';
import { UseFormRegister } from 'react-hook-form';
import { SignUpFormData } from '../../views/type';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    register: UseFormRegister<SignUpFormData>
    name: "name" | "email" | "password" | "confirmPassword",
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    leftIcon,
    rightIcon,
    register,
    name,
    value,
    onChange,
    ...props
}) => (
    <InputWrapper>
        {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
        <StyledInput
            {...register(name)}
            value={value}
            onChange={onChange}
            {...props}
        />
        {rightIcon && <IconRight>{rightIcon}</IconRight>}
    </InputWrapper>
);

export default InputField;
