import { StyledText } from '../utlis';
import { ComingSoonContainer } from './style';

const ComingSoon = () => {
    return (
        <ComingSoonContainer>
            <StyledText color="#09090A" fontFamily="OpenSans-Bold" weight="700" lineHeight="22px" size="16px">
                Coming Soon!
            </StyledText>
            <br />
            <StyledText color="#1F1F22" fontFamily="OpenSans-Light" weight="400" lineHeight="20px" size="14px">
                We are working hard to bring you this feature.
            </StyledText>
        </ComingSoonContainer>
    );
};

export default ComingSoon;
