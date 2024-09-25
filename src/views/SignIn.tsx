import { AuthFormWrapper, AuthSliderWrapper, AuthWrapper } from "../component"
import { Flex, StyledLink } from "../utlis"
import Button from "../utlis/ui_components/Button"
import InputField from "../utlis/ui_components/InputFeild"
import { Heading } from "./style"

const SignIn = () => {
  return (
    <AuthWrapper>
      <AuthSliderWrapper>
        
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
        >
        Create Account
        </Button>
        <StyledLink to="/" size="14px">Already have a account?</StyledLink>
        <Button
          bg="transparent"
          radius="48px"
          color="#89089f"
          margin="32px 0"
        >
          Create Account
        </Button>
      </AuthFormWrapper>
      </AuthWrapper>
  )
}

export default SignIn