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
} from "@gluestack-ui/themed";

import { useForm, Controller } from "react-hook-form";

import { useFirebase } from "../../../contexts/FirebaseContext";

const Information = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [reqError, setreqError] = useState<string | undefined>();

  const firebase = useFirebase();
  const { email, displayName } = firebase.user;

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      email,
      displayName,
    },
  });

  const handleInputChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log("formData submit: ", formData);
  };

  return (
    <VStack>
      <Center marginVertical={"$10"}>
        <Heading>Create Account</Heading>
        <Text>
          Fill your information below or register with you social account.
        </Text>
      </Center>
      <Center>
        <VStack space="lg">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Username</FormControlLabelText>
            </FormControlLabel>

            <Controller
              control={control}
              rules={{
                required: "Username is required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type="text"
                    placeholder="johnDoe23"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                </Input>
              )}
              name="displayName"
            />
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type="text"
                    placeholder="example@gmail.com"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                </Input>
              )}
              name="email"
            />
          </FormControl>

          <FormControl>
            <Button bg="$darkBlue600" onPress={handleSubmit(onSubmit)}>
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Update Information
              </ButtonText>
            </Button>
          </FormControl>
        </VStack>
      </Center>
    </VStack>
  );
};

export default Information;
