import React from 'react';
import { ButtonContainer } from './style';

interface ButtonProps {
    width?: string;
    height?: string;
    bg?: string;
    borderColor?: string;
    color?: string;
    radius?: string;
    padding?: string;
    margin?: string;
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    width,
    height,
    bg,
    borderColor,
    color,
    radius,
    padding,
    margin,
    type,
    onClick,
    children,
}) => (
    <ButtonContainer
        type={type}
        width={width}
        height={height}
        bg={bg}
        borderColor={borderColor}
        color={color}
        radius={radius}
        padding={padding}
        margin={margin}
        onClick={onClick}
    >
        {children}
    </ButtonContainer>
);

export default Button;
