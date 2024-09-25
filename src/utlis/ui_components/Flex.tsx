import styled from "styled-components";

interface FlexProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'}; /* Optional gap between items */
`;
