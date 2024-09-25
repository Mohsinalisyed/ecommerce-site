import styled from "styled-components";

interface FlexProps {
    justifyContent?: string;
    alignItems?: string;
    direction?: string;
    flexWrap?: string;
    gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'}; /* Optional gap between items */
`;
