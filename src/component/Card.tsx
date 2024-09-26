import React from 'react';
import { Card, ContentWrapper } from './style';
import { Box, Img } from '../utlis';
import Button from '../utlis/ui_components/Button';

interface ProductCardProps {
    imageSrc: string;
    name: string;
    price: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, price}) => {
    return (
        <Card>
            <Box style={{height:"260px"}}>
                <Img src={imageSrc} alt="Product" />
            </Box>
                <Box className="buttons">
                <Button radius='0'
                    borderColor='transparent'
                    bg='#111111'
                    color='#ffffff'
                >ADD TO CART</Button>
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
