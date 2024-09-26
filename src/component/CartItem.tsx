import React from 'react';
import { Box, Flex, Img, StyledText, TrashIcon } from "../utlis";
import { AddToCartWrapper, ImageWrapper } from "../views/style";
import { CustomWrapper, DeleteIcon, Price } from "./style";
import QuantityControl from "./QuantityControl";
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cartSlice';

interface CartItemProps {
    id: number;
    quantity: number;
    name: string;
    price: string;
    image: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity, name, price, image }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <AddToCartWrapper>
            <Flex alignItems="center" gap="12px">
                <ImageWrapper>
                    <Img src={image} alt={name} height={'100px'} />
                </ImageWrapper>
                <Box>
                    <StyledText color="#09090A" fontFamily="OpenSans-Bold" weight="700" lineHeight="22px" size="16px">
                        {name}
                    </StyledText>
                    <br />
                    <StyledText color="#1F1F22" fontFamily="OpenSans-Light" weight="400" lineHeight="20px" size="14px">
                        Running
                    </StyledText>
                </Box>
            </Flex>
            <CustomWrapper>
                <QuantityControl initialQuantity={quantity} itemId={id} />
                <Price>$ {(parseFloat(price.replace('$', '')) * quantity).toFixed(0)}</Price>
                <DeleteIcon onClick={handleRemove}>
                    <TrashIcon />
                </DeleteIcon>
            </CustomWrapper>
        </AddToCartWrapper>
    );
}

export default CartItem;
