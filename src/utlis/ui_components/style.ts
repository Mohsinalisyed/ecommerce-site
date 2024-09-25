import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 358px;
  height: 40px;
  border: 1px solid #D0D0D0;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const IconLeft = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
`;

export const IconRight = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  border: none;
  border-radius: 8px;
  outline: none;
  color: #828282;
  font-family: OpenSans-Light;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.07px;


  &:focus {
    border: 1px solid #A0A0A0; /* Change border color on focus */
  }
`;
