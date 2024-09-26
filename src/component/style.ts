import styled from "styled-components";
import authimage from "../assets/AuthImage.png";
import { Menu } from "react-pro-sidebar";
import { NavLink } from 'react-router-dom';



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
};
