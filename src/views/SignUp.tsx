import { useNavigate } from "react-router-dom";
import {
  AuthFormWrapper,
  AuthSliderContentWrapper,
  AuthSliderWrapper,
  AuthWrapper,
} from "../component";
import { Flex, StyledLink, StyledText } from "../utlis";
import Button from "../utlis/ui_components/Button";
import InputField from "../utlis/ui_components/InputFeild";
import { Heading } from "./style";

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <AuthWrapper>
      <AuthSliderWrapper>
        <AuthSliderContentWrapper>
          <StyledText
            fontFamily="OpenSans-Medium"
            size="24px"
            weight="600">
            Welcome to our shop
          </StyledText>
          <StyledText size="14px" lineHeight="48px">Purchase imported shoes</StyledText>
        </AuthSliderContentWrapper>
      </AuthSliderWrapper>
      <AuthFormWrapper>
        <Heading>Registration</Heading>
        <Flex direction="column" gap="16px">
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Password" />
          <InputField placeholder="Confirm Password" />
        </Flex>
        <Button
          bg="#89089f"
          radius="48px"
          color="#ffffff"
          margin="32px 0"
          padding="16px"
        >
          Create Account
        </Button>
        <StyledLink to="/" size="14px" color="#828282">
          Already have a account?
        </StyledLink>
        <Button
          bg="transparent"
          radius="48px"
          color="#89089f"
          margin="32px 0"
          padding="16px"
          onClick={() => navigate('/')}
        >
          Login
        </Button>
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default SignUp;
