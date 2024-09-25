import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthFormWrapper,
  AuthSliderContentWrapper,
  AuthSliderWrapper,
  AuthWrapper,
  ForgotPasswordStyle,
} from "../component";
import { EmailIcon, EyeIcon, Flex, Form, PasswordIcon, StyledLink, StyledText } from "../utlis";
import Button from "../utlis/ui_components/Button";
import InputField from "../utlis/ui_components/InputFeild";
import { Heading } from "./style";
import { SignInFormData, signInSchema } from "./type";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    // Handle sign-in logic, e.g., authentication API call
    console.log(data);
  };

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
        <Heading>Welcome</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="16px">
            <InputField
              placeholder="Email"
              leftIcon={<EmailIcon />}
              name="email"
              control={control}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

            <InputField
              placeholder="Password"
              leftIcon={<PasswordIcon />}
              rightIcon={<EyeIcon />}
              type="password"
              name="password"
              control={control}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

            <ForgotPasswordStyle>
              <StyledLink to="/" size="14px" color="#6f74dd">
                Forgot password?
              </StyledLink>
            </ForgotPasswordStyle>
          </Flex>
          <Button
            bg="#89089f"
            radius="48px"
            color="#ffffff"
            margin="32px 0"
            padding="16px"
            type="submit"
          >
            Login
          </Button>
        </Form>
        <StyledLink to="/signup" size="14px" color="#828282">
          Have no account yet?
        </StyledLink>
        <Button
          bg="transparent"
          radius="48px"
          color="#89089f"
          margin="32px 0"
          padding="16px"
          onClick={() => navigate('/signup')}
        >
          Registration
        </Button>
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default SignIn;
