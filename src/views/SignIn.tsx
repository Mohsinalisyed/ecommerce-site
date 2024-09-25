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
import { useState } from "react";

const SignIn = () => {
  const [message,setMassage]=useState('')
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    const storedUser = localStorage.getItem(data.email);

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // Check if the password matches
      if (userData.password === data.password) {
        setMassage("Login successful!");
        navigate('/home');
      } else {
        setMassage("Incorrect password.");
      }
    } else {
      setMassage("User not found. Please check your credentials.");
    }
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
        {message && <StyledText color={message === 'Login successful!'? 'green' : "red" } size="12px">{message}</StyledText>}
        <Heading>Welcome</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="16px">
            <InputField
              placeholder="Email"
              leftIcon={<EmailIcon />}
              name="email"
              control={control}
            />
            {errors.email && <StyledText color="red" size="12px">{errors.email.message}</StyledText>}

            <InputField
              placeholder="Password"
              leftIcon={<PasswordIcon />}
              rightIcon={<EyeIcon />}
              type="password"
              name="password"
              control={control}
            />
            {errors.password && <StyledText color="red" size="12px">{errors.password.message}</StyledText>}

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
