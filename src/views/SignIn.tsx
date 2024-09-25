import { AuthFormWrapper, AuthSliderWrapper, AuthWrapper } from "../component"
import { Flex } from "../utlis"
import InputField from "../utlis/ui_components/InputFeild"
import { Heading } from "./style"

const SignIn = () => {
  return (
    <AuthWrapper>
      <AuthSliderWrapper>
        
      </AuthSliderWrapper>
      <AuthFormWrapper>
        <Heading>Registration</Heading>
        <Flex flexDirection="column" gap="16px">
        <InputField placeholder="Name" />
        <InputField placeholder="Email" />
        <InputField placeholder="Password" />
        <InputField placeholder="Confirm Password" />
        </Flex>
      </AuthFormWrapper>
      </AuthWrapper>
  )
}

export default SignIn