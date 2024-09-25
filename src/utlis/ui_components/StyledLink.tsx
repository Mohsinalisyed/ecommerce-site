import React from 'react';
import { Link } from 'react-router-dom';
import { TextContainer } from './style';

interface TextProps {
    size?: string;
    weight?: string;
    color?: string;
    lineHeight?: string;
    fontFamily?: string;
    children: React.ReactNode;
    to: string;
}

export const StyledLink: React.FC<TextProps> = ({
    size,
    weight,
    color,
    lineHeight,
    children,
    fontFamily,
    to,
}) => (
    <Link to={to} style={{ textDecoration: 'none' }}>
        <TextContainer
            size={size}
            weight={weight}
            color={color}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
        >
            {children}
        </TextContainer>
    </Link>
);
