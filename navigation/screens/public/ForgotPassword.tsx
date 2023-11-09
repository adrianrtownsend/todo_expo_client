import { useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { emailRule } from "../../../lib/validation/rules";
import { useFirebase } from "../../../contexts/FirebaseContext";
import { isObjectEmpty } from "../../../helpers";

const ForgotPassword = () => {
  const firebase = useFirebase();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const { email } = data;
    if (isObjectEmpty(errors)) {
      setIsLoading(true);
      firebase
        .sendPasswordResetEmailLink(email)
        .then(() => {
          setIsLoading(false);
          setFormSuccess("Password reset email has been sent.");
        })
        .catch(() => {
          setFormError(
            "There was an error sending recovery email. Please try again",
          );
        });
    }
  };

  return (
    <Center flex={1}>
      <VStack width="$full" gap="$5" p="$3">
        <VStack>
          <Center flex={1}>
            <Heading>Forgot Password</Heading>
            <Text>Enter your email to receive a password recovery link.</Text>
          </Center>
        </VStack>

        <Box gap="$3">
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={emailRule}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type="text"
                    placeholder="example@gmail.com"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </Input>
              )}
              name="email"
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <Button borderRadius="$full" onPress={handleSubmit(onSubmit)}>
              <ButtonText fontSize="$sm" fontWeight="$medium">
                {isLoading ? "Signing In..." : "Sign In"}
              </ButtonText>
            </Button>
          </FormControl>
        </Box>
        <HStack justifyContent="center">
          <Text>Already have an account?</Text>
          <Link onPress={() => navigation.navigate("Login")}>
            <LinkText>Log In</LinkText>
          </Link>
        </HStack>
      </VStack>
    </Center>
  );
};

export default ForgotPassword;
