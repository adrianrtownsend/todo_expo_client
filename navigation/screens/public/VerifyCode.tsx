import * as React from "react";
import {
  MoonIcon,
  AlertCircleIcon,
  ArrowLeftIcon,
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Heading,
  Icon,
  Input,
  InputField,
  Link,
  LinkText,
  Text,
  VStack,
  HStack,
} from "@gluestack-ui/themed";

const VerifyCode = () => {
  return (
    <Center flex={1}>
      <VStack width="$full" gap="$5" p="$3">
        <VStack>
          <Center flex={1}>
            <Heading>Forgot Password</Heading>
            <Text>Enter your email to receive a password recovery link.</Text>
          </Center>
        </VStack>
        <FormControl size="lg">
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="text" placeholder="example@gmail.com" />
          </Input>
        </FormControl>

        <HStack justifyContent="center">
          <Text>Didn't receive code?</Text>
          <Link onPress={() => navigation.navigate("Login")}>
            <LinkText>Resend code</LinkText>
          </Link>
        </HStack>

        <FormControl>
          <Button borderRadius="$full">
            <ButtonText>Verify</ButtonText>
          </Button>
        </FormControl>
      </VStack>
    </Center>
  );
};

export default VerifyCode;
