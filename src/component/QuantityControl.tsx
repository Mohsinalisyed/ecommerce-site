import React, { useState } from 'react';
import { QuantityWrapper, ArrowButton, QuantityDisplay } from './style';
import { Box } from '../utlis';

interface QuantityControlProps {
    initialQuantity: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ initialQuantity }) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const increase = () => {
        setQuantity(prev => prev + 1);
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <QuantityWrapper>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <ArrowButton onClick={increase}>⬆️</ArrowButton>
                <ArrowButton onClick={decrease}>⬇️</ArrowButton>
            </Box>
        </QuantityWrapper>
    );
};

export default QuantityControl;
