import styled from 'styled-components';
interface ButtonProps {
    width?: string;
    height?: string;
    bg?: string;
    borderColor?: string;
    color?: string;
    radius?: string;
    padding?: string;
    margin?: string;
}
interface TextProps {
    size?: string;
    weight?: string;
    color?: string;
    lineHeight?: string;
    fontFamily?: string;
}
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
  left: 8px;
  display: flex;
  align-items: center;
`;

export const IconRight = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 38px;
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

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '358px'};
  height: ${({ height }) => height || '40px'};
  border: 1px solid ${({ borderColor }) => borderColor || '#D0D0D0'};
  border-radius: ${({ radius }) => radius || '8px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ color }) => color || '#000'};
  margin:${({ margin }) => margin || '0'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align:center;

  &:hover {
    background-color: ${({ bg }) => bg ? bg : '#f0f0f0'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #A0A0A0;
  }
`;

export const TextContainer = styled.span<TextProps>`
  font-size: ${({ size }) => size || '16px'}; 
  font-weight: ${({ weight }) => weight || '400'};
  color: ${({ color }) => color || '#ffffff'};
  line-height: ${({ lineHeight }) => lineHeight || 'normal'};
  font-family:${({ fontFamily }) => fontFamily || 'OpenSans-Light'};
`;
