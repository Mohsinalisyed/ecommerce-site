import styled from "styled-components";
import authimage from "../assets/AuthImage.png";

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