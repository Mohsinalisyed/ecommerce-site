import React, { useState, useEffect } from 'react';
import { QuantityWrapper, ArrowButton, QuantityDisplay } from './style';
import { DownwardArrowIcon, Flex, UpwardArrowIcon } from '../utlis';
import { useDispatch } from 'react-redux';
import { updateItem } from '../features/cartSlice'; // Import update action

interface QuantityControlProps {
    initialQuantity: number;
    itemId: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ initialQuantity, itemId }) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);
    const dispatch = useDispatch();

    const increase = () => {
        setQuantity(prev => prev + 1);
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    // Dispatch updateItem action whenever quantity changes
    useEffect(() => {
        dispatch(updateItem({ id: itemId, quantity }));
    }, [quantity, itemId, dispatch]);

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
