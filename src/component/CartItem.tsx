import { Box, Flex, Img, StyledText, TrashIcon } from "../utlis"
import { AddToCartWrapper, ImageWrapper } from "../views/style"
import Shoes1 from '../assets/Shoes1.png'
import { CustomWrapper, DeleteIcon, Price } from "./style"
import QuantityControl from "./QuantityControl"
const CartItem = () => {
  return (
      <AddToCartWrapper>
          <Flex alignItems="center" gap="12px">
              <ImageWrapper>
                  <Img src={Shoes1} alt="ProfileImg" height={'100px'}/>
              </ImageWrapper>
              <Box>
                  <StyledText color="#09090A" fontFamily="OpenSans-Bold" weight="700" lineHeight="22px" size="16px">
                      SNEAKERS
                  </StyledText>
                  <br />
                  <StyledText color="#1F1F22" fontFamily="OpenSans-Light" weight="400" lineHeight="20px" size="14px">
                      Running
                  </StyledText>
              </Box>
          </Flex>
          <CustomWrapper>
              <QuantityControl initialQuantity={1} />
              <Price>$65</Price>
              <DeleteIcon >
                  <TrashIcon/>
              </DeleteIcon>
          </CustomWrapper>
    </AddToCartWrapper>
  )
}

export default CartItem