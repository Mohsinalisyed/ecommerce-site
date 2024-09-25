import styled from "styled-components";
import authimage from "../assets/AuthImage.png";
import { Menu } from "react-pro-sidebar";


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
  width: 220px;
.ps-sidebar-root {
height:100vh;
};

  .ps-sidebar-container {
    height: 100vh;
    width: 100%;
    min-width: 100%;

    &.collapsed {
      width: 80px;
      min-width: 80px;
    }

    .pro-sidebar-inner {
      background-color: white;
      box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);

      .pro-sidebar-layout {
        overflow-y: hidden;

        .logotext p {
          font-size: 20px;
          padding: 0 20px;
          color: #000;
          font-weight: bold;
        }

        ul {
          padding: 0 5px;

          .pro-inner-item {
            color: #000;
            margin: 10px 0;
            font-weight: bold;

            .pro-icon-wrapper {
              background-color: #fbf4cd;
              color: #000;
              border-radius: 3px;

              .pro-item-content {
                color: #000;
              }
            }
          }

          .active {
            background-image: linear-gradient(0deg, #fece00 0%, #ffe172 100%);
          }
        }
      }
    }
  }
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
  padding: 20px;
`;

export { HeaderContainer, CloseMenu, LogoContainer };
