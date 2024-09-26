import { Flex, ForwardIcon, Img, StyledText } from "../utlis"
import { CardTypeWrapper, CheckoutWrapper, PaymentWrapper, StyledBox } from "./style"
import ProfileImg from "../assets/ProfileImg.png";
import MasterCardIcon from "../assets/MasterCardIcon.png";
import VisaCardIcon from "../assets/VisaCardIcon.png";
import PayPalCardIcon from "../assets/PayPalCardIcon.png";
import PaymentInput from "./PaymentInput";
import CardContentWrapper from "./CardContentWrapper";
import styled from "styled-components";
const StyledFlex = styled(Flex)`
    margin-bottom: 24px;
    justify-content:space-between;
`;
const Payment = () => {
  return (
    <PaymentWrapper>
      <StyledFlex justifyContent="space-between">
        <StyledText size="22px" lineHeight="29px" fontFamily="OpenSans-Light" weight="600" color="#FEFCFC">
          Card Details
        </StyledText>
        <Img src={ProfileImg} alt="ProfileImg" />
      </StyledFlex>
        <StyledText size="16px" lineHeight="21px" fontFamily="OpenSans-Light" weight="400" color="#FEFCFC">
          Card type
        </StyledText>
        <Flex gap="17px" style={{margin:'10px 0'}}>
          <CardTypeWrapper>
            <Img src={MasterCardIcon} alt="MasterCardIcon" />
          </CardTypeWrapper>
          <CardTypeWrapper>
            <Img src={VisaCardIcon} alt="VisaCardIcon" />
          </CardTypeWrapper>
          <CardTypeWrapper>
            <Img src={PayPalCardIcon} alt="PayPalCardIcon" />
          </CardTypeWrapper>
      </Flex>
        <PaymentInput label="Name on card" value='Name'/>
        <PaymentInput label="Card Number" value="1111 2222 3333 4444" />
        <Flex gap="8px">
          <PaymentInput label="Expiration date" value="mm/yy" />
          <PaymentInput label="CVV" value="123" />
        </Flex>
      <StyledBox />
      <CardContentWrapper label="Subtotal" price="$1,668" />
      <CardContentWrapper label="Shipping" price="$4" />
      <CardContentWrapper label="Total (Tax incl.)" price="$1,672" />
      <CheckoutWrapper>
        <Flex justifyContent='space-between' style={{width:"100%"}}>
          <StyledText size="16px" lineHeight="21px" fontFamily="OpenSans-Light" weight="400" color="#FEFCFC">
            $1,672
          </StyledText>
          <StyledText size="16px" lineHeight="21px" fontFamily="OpenSans-Light" weight="400" color="#FEFCFC">
            <Flex alignItems="center">Checkout <ForwardIcon /></Flex>
          </StyledText>
        </Flex>
      </CheckoutWrapper>
    </PaymentWrapper>
  )
}

export default Payment