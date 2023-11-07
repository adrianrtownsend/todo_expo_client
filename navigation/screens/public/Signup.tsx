import { useState } from "react";
import {
  MoonIcon,
  AlertCircleIcon,
  ArrowLeftIcon,
  Box,
  Button,
  ButtonText,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
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
  Pressable,
  InputIcon,
  InputSlot,
} from "@gluestack-ui/themed";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../graphql";
import { useFirebase } from "../../../contexts/FirebaseContext";
import { isObjectEmpty } from "../../../helpers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EyeIcon, EyeOffIcon, ChromeIcon } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import {
  emailRule,
  passwordRule,
  confirmPasswordRule,
} from "../../../lib/validation/rules";

const Signup = () => {
  const firebase = useFirebase();
  const { params } = useRoute();
  const navigation = useNavigation();
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const togglePasswordShow = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordShow = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    if (isObjectEmpty(errors)) {
      setIsLoading(true);

      // TODO: Check if email already exists
      const emailExists = false;
      if (emailExists) {
        setFormError("An account with that email already exists");
      } else {
        navigation.navigate("CreateProfile", {
          email,
          password,
        });
      }
      setIsLoading(false);
    }
  };

  return (
    <Center flex={1}>
      <VStack width="$full" gap="$5" p="$1">
        <VStack m="$2" p="$3">
          <Heading textAlign="center">Create Account</Heading>
          <Text textAlign="center">
            Fill your information below or register with you social account.
          </Text>
        </VStack>
        {formError && (
          <Box p="$3">
            <Box borderRadius="$md" bg="$error100" p="$5">
              <Text color="$error500">{formError}</Text>
            </Box>
          </Box>
        )}
        <Box p="$3" gap="$5">
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

            <FormControl isRequired isInvalid={!!errors.password}>
              <FormControlLabel mb="$1">
                <FormControlLabelText>Password</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                rules={passwordRule}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      type={showPassword ? "text" : "password"}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <InputSlot pr="$3" onPress={togglePasswordShow}>
                      {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                      <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                )}
                name="password"
              />
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {errors.password?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.confirmPassword}>
              <FormControlLabel mb="$1">
                <FormControlLabelText>Confirm Password</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                rules={passwordRule}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      type={showConfirmPassword ? "text" : "password"}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <InputSlot pr="$3" onPress={toggleConfirmPasswordShow}>
                      {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                      <InputIcon
                        as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                      />
                    </InputSlot>
                  </Input>
                )}
                name="confirmPassword"
              />
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {"Passwords must match"}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <Button borderRadius="$full" onPress={handleSubmit(onSubmit)}>
                <ButtonText fontSize="$sm" fontWeight="$medium">
                  Sign Up
                </ButtonText>
              </Button>
            </FormControl>
          </Box>
        </Box>
        <VStack p="$3" gap="$3">
          <HStack justifyContent="center" space="md">
            <Center width={"$1/5"}>
              <Divider />
            </Center>
            <Text textAlign="center">Or sign up with</Text>
            <Center width={"$1/5"}>
              <Divider />
            </Center>
          </HStack>
          <HStack justifyContent="space-evenly" paddingHorizontal={"$1/6"}>
            <Pressable
              onPress={() => console.log("clicked google link")}
              p="$3"
              borderWidth={"$1"}
              borderRadius={"$full"}
            >
              <Icon as={ChromeIcon} color="black" />
            </Pressable>
          </HStack>
        </VStack>
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

export default Signup;
