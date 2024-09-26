import React, { useState } from 'react';
import { QuantityWrapper, ArrowButton, QuantityDisplay } from './style';
import { DownwardArrowIcon, Flex, UpwardArrowIcon } from '../utlis';

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
            <Flex direction='column' style={{ marginBottom: "6px" }}>
                    <ArrowButton onClick={increase}>
                        <UpwardArrowIcon />
                    </ArrowButton>
                    <ArrowButton onClick={decrease}>
                        <DownwardArrowIcon />
                    </ArrowButton>
                </Flex>
        </QuantityWrapper>
    );
};

export default QuantityControl;
