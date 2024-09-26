import React from 'react';
import { Card, ContentWrapper } from './style';
import { Box, Img } from '../utlis';
import Button from '../utlis/ui_components/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { ICartItem } from '../views/MyCart';

interface ProductCardProps {
    id: number;
    imageSrc: string;
    name: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, price, id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item: ICartItem = {
            id,
            quantity: 1, // Set the initial quantity to 1 or another default value
            name,
            price,
            image: imageSrc,
        };
        dispatch(addItem(item));
    };

    return (
        <Card>
            <Box style={{ height: "260px" }}>
                <Img src={imageSrc} alt="Product" />
            </Box>
            <Box className="buttons">
                <Button radius='0'
                    borderColor='transparent'
                    bg='#111111'
                    color='#ffffff'
                    onClick={handleAddToCart}>
                    ADD TO CART
                </Button>
                <Button radius='0' borderColor='transparent' bg='#89089F' color='#ffffff'>QUICK VIEW</Button>
            </Box>
            <ContentWrapper>
                <Box className="name">{name}</Box>
                <Box className="price">{price}</Box>
            </ContentWrapper>
            <ContentWrapper>
                <Box className="rating">Rating</Box>
                <Box className="star">⭐</Box>
            </ContentWrapper>
        </Card>
    );
};

export default ProductCard;
