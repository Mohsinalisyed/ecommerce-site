import React from 'react';
import { TextContainer } from './style';

interface TextProps {
    size?: string;
    weight?: string;
    color?: string;
    lineHeight?: string;
    fontFamily?: string;
    children: React.ReactNode;
}

export const StyledText: React.FC<TextProps> = ({
    size,
    weight,
    color,
    lineHeight,
    children,
    fontFamily,
}) => (

        <TextContainer
            size={size}
            weight={weight}
            color={color}
            lineHeight={lineHeight}
            fontFamily={fontFamily}
        >
            {children}
        </TextContainer>
);
