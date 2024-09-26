import React from 'react';
import { Flex, StyledText } from "../utlis";
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
    margin-bottom: 6px;
    flex-wrap:wrap;
`;

interface CardContentWrapperProps {
    label: string;
    price: string;
}

const CardContentWrapper: React.FC<CardContentWrapperProps> = ({ label, price }) => {
    return (
        <StyledFlex justifyContent='space-between'>
            <StyledText size="16px" lineHeight="21px" fontFamily="OpenSans-Light" weight="400" color="#FEFCFC">
                {label}
            </StyledText>
            <StyledText size="16px" lineHeight="21px" fontFamily="OpenSans-Light" weight="400" color="#FEFCFC">
                {price}
            </StyledText>
        </StyledFlex>
    );
};

export default CardContentWrapper;
