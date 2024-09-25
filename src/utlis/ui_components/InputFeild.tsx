import React from 'react';
import { InputWrapper, IconLeft, IconRight, StyledInput } from './style';
import { Controller } from 'react-hook-form';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    control: any;
    name: "name" | "email" | "password" | "confirmPassword";
}

const InputField: React.FC<InputFieldProps> = ({
    leftIcon,
    rightIcon,
    control,
    name,
    ...props
}) => (
    <InputWrapper>
        {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <StyledInput
                    {...field}
                    {...props}
                />
            )}
        />
        {rightIcon && <IconRight>{rightIcon}</IconRight>}
    </InputWrapper>
);

export default InputField;
