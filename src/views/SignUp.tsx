import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormWrapper, AuthSliderContentWrapper, AuthSliderWrapper, AuthWrapper } from "../component";
import { EmailIcon, EyeIcon, Flex, Form, NameIcon, PasswordIcon, StyledLink, StyledText } from "../utlis";
import Button from "../utlis/ui_components/Button";
import InputField from "../utlis/ui_components/InputFeild";
import { Heading } from "./style";
import { signUpSchema, SignUpFormData } from './type';
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMassage] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    const existingUser = localStorage.getItem(data.email);
    if (existingUser) {
      setMassage("Email is already registered.");
      return;
    }

    const userData = { name: data.name, email: data.email, password: data.password };
    localStorage.setItem('user', JSON.stringify(userData));
    setMassage("Account created successfully!");
    navigate('/');
  };


  return (
    <AuthWrapper>
      <AuthSliderWrapper>
        <AuthSliderContentWrapper>
          <StyledText fontFamily="OpenSans-Medium" size="24px" weight="600">
            Welcome to our shop
          </StyledText>
          <StyledText size="14px" lineHeight="48px">Purchase imported shoes</StyledText>
        </AuthSliderContentWrapper>
      </AuthSliderWrapper>
      <AuthFormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {message && <StyledText color={message === 'Login successful!' ? 'green' : "red"} size="12px">{message}</StyledText>}
          <Heading>Registration</Heading>
          <Flex direction="column" gap="16px">
            <InputField
              placeholder="Name"
              leftIcon={<NameIcon />}
              name="name"
              control={control}
            />
            {errors.name && <StyledText color="red" size="12px">{errors.name.message}</StyledText>}

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

            <InputField
              placeholder="Re-enter password"
              leftIcon={<PasswordIcon />}
              rightIcon={<EyeIcon />}
              type="password"
              name="confirmPassword"
              control={control}
            />
            {errors.confirmPassword && <StyledText color="red" size="12px">{errors.confirmPassword.message}</StyledText>}
          </Flex>

          <Button
            bg="#89089f"
            radius="48px"
            color="#ffffff"
            margin="32px 0"
            padding="16px"
            type='submit'
          >
            Create Account
          </Button>

          <Flex justifyContent="center">
            <StyledLink to="/" size="14px" color="#828282">
              Already have an account?
            </StyledLink>
         </Flex>

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
        </Form>
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default SignUp;
