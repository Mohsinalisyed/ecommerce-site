import React from 'react';
import { Card, ContentWrapper } from './style';
import { Box, Flex, HeartIcon, Img, StarIcon, StyledText } from '../utlis';
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
            <Flex style={{ height: "260px" }} alignItems='center'>
                <Img src={imageSrc} alt="Product" />
            </Flex>
            <Box className="buttons">
                <Button radius='0'
                    borderColor='transparent'
                    bg='#111111'
                    color='#ffffff'
                    height='49.12px'
                    onClick={handleAddToCart}>
                    <StyledText fontFamily='RobotoCondensed-Bold' weight='700' size='13px' lineHeight='15px'>ADD TO CART</StyledText>
                </Button>
                <Button
                    radius='0'
                    borderColor='transparent'
                    bg='#89089F'
                    height='49.12px'
                    color='#ffffff'>
                    <StyledText fontFamily='RobotoCondensed-Bold' weight='700' size='13px' lineHeight='15px'>QUICK VIEW</StyledText>
                </Button>
            </Box>
            <ContentWrapper>
                <StyledText fontFamily='RobotoCondensed-Bold' weight='700' size='20px' lineHeight='23px' color=' #000000'>
                    {name}
                </StyledText>
                <StyledText fontFamily='RobotoCondensed-Bold' weight='700' size='20px' lineHeight='23px' color=' #000000'>
                    <Flex alignItems="center" gap='7px'> <HeartIcon /> {price}</Flex>
                </StyledText>
            </ContentWrapper>
            <ContentWrapper>
                <StyledText
                    color="#1F1F22"
                    fontFamily="OpenSans-Italic"
                    weight="400"
                    lineHeight="23px"
                    size="17px"
                >
                    Running
                </StyledText>
                <Flex alignItems='center'>
                    {Array.from({ length: 4 }, (_, index) => (
                        <StarIcon key={index} style={{ marginRight: index < 3 ? '6.7px' : '0' }} />
                    ))}
                </Flex>
            </ContentWrapper>
        </Card>
    );
};

export default ProductCard;
