import styled from "styled-components";
import authimage from "../assets/AuthImage.png";
import { Menu } from "react-pro-sidebar";
import { NavLink } from 'react-router-dom';

interface InputFieldProps {
  width?: string;
}

export const StyledMenu = styled(Menu)`
  height: 70vh;
  li {
    padding: 0px;
  }
  .ps-menu-button {
    paddingleft: 20px !important;
  }
`;
export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1218px;
  margin: 0 auto;
  border-radius: 24px;
  backdrop-filter: blur(24px);
  border: 1px solid #f2f2f2;
  overflow-x:hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  };
`;

export const AuthSliderWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 732px;
  height: 743px;
  background-image: url(${authimage});
  background-repeat: no-repeat;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`;
export const AuthSliderContentWrapper = styled.div`
  position: absolute;
  bottom:25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AuthFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 486px;
  height: 743px;
  background: #ffffff;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;
export const ForgotPasswordStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: absolute;
.ps-sidebar-root {
  height:100vh;
  width:266px;
  .ps-menuitem-root {
 width:218px;
 margin:0 auto 24px auto;
 .ps-menu-button {
 padding:16px;
 border-radius:8px;
 };
 .ps-menu-button.ps-active {
background: #89089F;
}
 };
 };
`;

const CloseMenu = styled.div`
  color: #000;
  position: absolute;
  right: 0;
  z-index: 9999;
  line-height: 20px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 22px;
  top: 55px;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  padding: 24px;
  margin-bottom:20px;
`;
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-family:OpenSans-Light;
    font-weight: 400;
    line-height:22px;
    font-size:16px;
`;
const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;
const HomeWrapper = styled.div`
  margin: 0px 40px 0px 38px;
`;
const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:24px
`;

 const Card = styled.div`
  width: 295.6px;
  height: 431.82px;
  border-radius: 15.63px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .name, .price, .rating {
    margin: 8px 0;
  }
`;
const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content:center;
    gap: 16px;
    margin:24px 0;
`;
const ContentWrapper = styled.div`
  padding: 15px 11px 15px 11px;
  width: 90% !important;
  display:flex;
  justify-content:space-between;
`;

const CustomWrapper = styled.div`
  width: auto;
  height: auto;
  min-width: 205px;
  max-height: 27px;
  display: flex;
  gap: 44px;
  align-items: center;
  padding-right:24px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArrowButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  height:11px;
  &:hover {
    opacity: 0.7;
  }
`;

const QuantityDisplay = styled.div`
  font-family: Raleway-Medium;
  font-weight: 600;
  font-size: 22.09px;
  line-height: 22.36px;
  color: #393939;
 
`;

const Price = styled.div`
  font-family: OpenSans-Medium;
  font-weight: 700;
  font-size: 20.09px;
  line-height: 27.36px;
  color:#000000;

`;

const DeleteIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #ff0000;

  &:hover {
    opacity: 0.7;
  }
`;
const PaymentWrapper = styled.div`
  width:100%;
  max-width: 398px;
  height: 709px;
  border-radius: 24px;
  padding: 24px;
  background: #89089F;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`;
const CardTypeWrapper = styled.div`
  width: 75px;
  height: 55px;
  border-radius: 5px;
  background: rgba(217, 217, 217, 0.2);
  box-sizing:border-box;
`;

const InputWrapper = styled.div`
  margin-top: 14px;
`;

const Label = styled.label`
  display: block;
  color: #FFFFFF;
  margin-bottom: 8px;
  font-size:16px;
  line-height:21px;
  font-weight:400;
  font-family:OpenSans-Light;
`;

const InputField = styled.input<InputFieldProps>`
  width: 100%;
  max-width: ${({ width }) => width || '100%'};
  height: 48px;
  border-radius: 6px;
  background: rgba(186, 104, 200);
  border: none;
  padding: 0 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: red;
  box-sizing: border-box;
  color: #ffffff !important;
  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
  }
`;
const StyledBox = styled.div`
  border: 1px solid #BA68C8;
  margin: 24px 0;
`;
const CheckoutWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #BA68C8;
  display:flex;
  align-items:center;
  padding:0 20px 0 24px;
  border-radius:12px;
  box-sizing:border-box;
  margin-top:24px;

`;

export {
  HeaderContainer,
  CloseMenu,
  LogoContainer,
  StyledNavLink,
  ComingSoonContainer,
  HomeWrapper,
  BannerWrapper,
  Card,
  CardWrapper,
  ContentWrapper,
  CustomWrapper,
  ArrowButton,
  QuantityDisplay,
  QuantityWrapper,
  Price,
  DeleteIcon,
  PaymentWrapper,
  CardTypeWrapper,
  InputWrapper,
  InputField,
  Label,
  StyledBox,
  CheckoutWrapper
};
