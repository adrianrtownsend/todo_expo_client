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
import { isObjectEmpty } from "../../../helpers";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CREATE_TODO, UPDATE_TODO } from "../../../graphql";

const TodoForm = () => {
  const { params } = useRoute();
  const [createTodo, createTodoOptions] = useMutation(CREATE_TODO);
  const [updateTodo, updateTodoOptions] = useMutation(UPDATE_TODO);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      isCompleted: false,
    },
  });

  const submitCreateTodo = () => {};

  const submitUpdateTodo = () => {};

  const onSubmit = (data) => {
    const { title, description, isCompleted } = data;
    if (isObjectEmpty(errors)) {
      setIsLoading(true);
    }
  };

  return (
    <VStack>
      <VStack></VStack>
      <Box>
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
  );
};

export default TodoForm;
