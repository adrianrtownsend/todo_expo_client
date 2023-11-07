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
} from "@gluestack-ui/themed";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../graphql";
import { useFirebase } from "../../../contexts/FirebaseContext";
import { useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { isObjectEmpty } from "../../../helpers";
import { useUserCtx } from "../../../contexts/UserContext";
import { usernameRule, nameRule } from "../../../lib/validation/rules";

const CreateProfile = () => {
  const firebase = useFirebase();
  const { params } = useRoute();
  const userCtx = useUserCtx();
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const { email, password } = params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      termsAgree: false,
    },
  });

  const onSubmit = (data) => {
    const { username, firstName, lastName } = data;
    if (isObjectEmpty(errors)) {
      setIsLoading(true);
      firebase
        .registerUserWithEmailAndPassword(email, password)
        .then(async (firebaseUser) => {
          const {
            passwordHash,
            passwordSalt,
            uid: authFirebaseUid,
          } = firebaseUser;
          await createUser({
            variables: {
              username,
              email,
              firstName,
              lastName,
              passwordHash,
              passwordSalt,
              authFirebaseUid,
            },
          });
          // set user in UserContext
          const { user } = data;
          userCtx.setUser(user);
        })
        .catch((error) => {
          console.error("login error: ", error);
          setFormError("Please doublecheck your profile information");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Center flex={1}>
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
              <FormControl isRequired isInvalid={!!errors.username}>
                <FormControlLabel>
                  <FormControlLabelText>Username</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={usernameRule}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        type="text"
                        placeholder="exampleUser0123"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </Input>
                  )}
                  name="username"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    {errors.username?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.username}>
                <FormControlLabel>
                  <FormControlLabelText>First Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={nameRule}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        type="text"
                        placeholder="Miles"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </Input>
                  )}
                  name="firstName"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    {errors.firstName?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <FormControl isRequired isInvalid={!!errors.username}>
                <FormControlLabel>
                  <FormControlLabelText>Last Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={nameRule}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        type="text"
                        placeholder="Morales"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </Input>
                  )}
                  name="lastName"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    {errors.lastName?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <Checkbox value="agree">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  Agree to{" "}
                  <Link>
                    <LinkText>Terms &amp; Conditions</LinkText>
                  </Link>
                </CheckboxLabel>
              </Checkbox>
            </Box>

            <Box>
              <FormControl>
                <Button borderRadius="$full" onPress={handleSubmit(onSubmit)}>
                  <ButtonText fontSize="$sm" fontWeight="$medium">
                    {isLoading ? "Submitting" : "Submit"}
                  </ButtonText>
                </Button>
              </FormControl>
            </Box>
          </Box>
        </VStack>
      </Center>
    </Center>
  );
};

export default CreateProfile;
