import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormWrapper, AuthSliderContentWrapper, AuthSliderWrapper, AuthWrapper } from "../component";
import { EmailIcon, EyeIcon, Flex, Form, NameIcon, PasswordIcon, StyledLink, StyledText } from "../utlis";
import Button from "../utlis/ui_components/Button";
import InputField from "../utlis/ui_components/InputFeild";
import { Heading } from "./style";
import { signUpSchema, SignUpFormData } from './type';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    const userData = { name: data.name, email: data.email, password: data.password };
    localStorage.setItem(data.email, JSON.stringify(userData));
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
          <Heading>Registration</Heading>
          <Flex direction="column" gap="16px">
            <InputField
              placeholder="Name"
              leftIcon={<NameIcon />}
              name="name"
              register={register}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}

            <InputField
              placeholder="Email"
              leftIcon={<EmailIcon />}
              name="email"
              register={register}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

            <InputField
              placeholder="Password"
              leftIcon={<PasswordIcon />}
              rightIcon={<EyeIcon />}
              type="password"
              name="password"
              register={register}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

            <InputField
              placeholder="Re-enter password"
              leftIcon={<PasswordIcon />}
              rightIcon={<EyeIcon />}
              type="password"
              name="confirmPassword"
              register={register}
            />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
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

       
          <StyledLink to="/" size="14px" color="#828282">
            Already have an account?
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
        </Form>

      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default SignUp;
