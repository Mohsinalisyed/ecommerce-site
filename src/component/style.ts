import styled from "styled-components";
import authimage from '../assets/AuthImage.png'

export const AuthWrapper = styled.div`
display:flex;
align-items:center;
 width:100%;
 max-width:1218px;
 margin:0 auto;
 border-radius:24px;
 backdrop-filter: blur(24px);
 border: 1px solid #F2F2F2;
 height: 100vh;
`;

export const AuthSliderWrapper = styled.div`
 width:100%;
 max-width:732px;
 height:100%;
 background-image:url(${authimage});
 border-top-left-radius:24px;
 border-top-left-radius:24px;
`;
export const AuthFormWrapper = styled.div`
 width:100%;
 max-width:486px;
 height:100%;
 background:#ffffff;
 border-top-right-radius:24px;
 border-top-right-radius:24px;
`;