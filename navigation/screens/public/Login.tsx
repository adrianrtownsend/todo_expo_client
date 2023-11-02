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
  Pressable,
  ScrollView,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { useFirebase } from "../../../contexts/FirebaseContext";
import { ChromeIcon } from "lucide-react-native";
import { ImageBackground } from "react-native";

const Login = ({ navigation }) => {
  const firebase = useFirebase();
  const [formData, setFormData] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * iterate through formData props
   * set errors to items & fail
   * return pass if all good
   */
  const validate = () => {
    console.log("formData: ", formData);
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };

  const onSubmit = async () => {
    /**
     * run through validation
     * handle submit if passed
     * - validation fail should automatically trigger fail error throw
     */
    /**
     * set response pass/fail validations
     */
    await validate();
    firebase.loginWithEmailAndPassword({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <VStack gap="$5">
      <VStack>
        <Heading textAlign="center">Log In</Heading>
        <Text textAlign="center">Hi! Welcome back, you've been missed</Text>
        <Text textAlign="center">{firebase ? "works" : "not"}</Text>
      </VStack>
      <Box p="$3" gap="$5">
        <Box gap="$3">
          <FormControl size="lg" isRequired isInvalid={"email" in errors}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="example@gmail.com"
                onChangeText={(value) => handleInputChange(value, "email")}
              />
            </Input>
            {/* <FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>An email error</FormControlErrorText>
					</FormControlError> */}
          </FormControl>

          <FormControl
            size="lg"
            isInvalid={"password" in errors}
            isRequired={true}
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="password"
                placeholder="password"
                onChangeText={(value) => handleInputChange(value, "password")}
              />
            </Input>
            <FormControlHelper justifyContent="flex-end">
              <FormControlHelperText>
                <Link onPress={() => navigation.navigate("ForgotPassword")}>
                  <LinkText>Forgot Password?</LinkText>
                </Link>
              </FormControlHelperText>
            </FormControlHelper>
            {/* <FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>{getErrors('password')}</FormControlErrorText>
					</FormControlError> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Button bg="$darkBlue600" borderRadius="$full" onPress={onSubmit}>
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Sign In
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
          <Text textAlign="center">Or sign in with</Text>
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
        <Text>Don't have an account?</Text>
        <Link onPress={() => navigation.navigate("Signup")}>
          <LinkText>Sign Up</LinkText>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Login;
