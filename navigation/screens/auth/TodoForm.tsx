import { useMutation } from "@apollo/client";
import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { CREATE_TODO, UPDATE_TODO } from "../../../graphql";
import { isObjectEmpty } from "../../../helpers";

const TodoForm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [createTodo, { loading: createLoading, error: createError }] =
    useMutation(CREATE_TODO);
  const [updateTodo, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_TODO);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const todo = route.params?.todo;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: todo?.title ?? "",
      description: todo?.description ?? "",
      isCompleted: todo?.isCompleted ?? false,
    },
  });

  const onSubmit = async (data) => {
    console.log("todo: ", todo);
    if (isObjectEmpty(errors)) {
      if (todo) {
        updateTodo({ variables: { ...data, id: todo.id } }).then(() => {
          setFormSuccess("Sucessfully updated todo");
        });
      } else {
        createTodo({ variables: data })
          .then((res) => {
            navigation.navigate("Todo", {
              screen: "Todo",
              params: { todoId: res.data?.createTodo.id },
            });
          })
          .catch((error) => {
            console.log(error);
            setFormError("There was an error creating todo");
          });
      }
    }
  };

  if (createError) setFormError(createError.message);
  if (updateError) setFormError(updateError.message);

  return (
    <VStack p="$3">
      <VStack m="$2" p="$3">
        <Heading textAlign="center">Create New Todo</Heading>
        <Text textAlign="center">
          Please fill in the information for your new todo item..
        </Text>
      </VStack>
      {formError && (
        <Box borderRadius="$md" bg="$error100" p="$5">
          <Text color="$error500">{formError}</Text>
        </Box>
      )}
      {formSuccess && (
        <Box borderRadius="$md" bg="$success100" p="$5">
          <Text color="$success500">{formSuccess}</Text>
        </Box>
      )}
      <Box gap="$3">
        <Box gap="$3">
          <FormControl isRequired isInvalid={!!errors.title}>
            <FormControlLabel>
              <FormControlLabelText>Title</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              rules={{
                required: "Please include a title",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type="text"
                    placeholder="exampleUser123"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </Input>
              )}
              name="title"
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors.title?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.title}>
            <FormControlLabel>
              <FormControlLabelText>Description</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Textarea>
                  <TextareaInput
                    type="text"
                    placeholder="exampleUser123"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </Textarea>
              )}
              name="description"
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                {errors.description?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl>
            <VStack space="sm">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Checkbox
                    size="sm"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  >
                    <CheckboxIndicator mr="$2">
                      <CheckboxIcon>
                        <CheckIcon />
                      </CheckboxIcon>
                    </CheckboxIndicator>
                    <CheckboxLabel>Mark as Complete?</CheckboxLabel>
                  </Checkbox>
                )}
                name="isCompleted"
              />
            </VStack>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Button borderRadius="$full" onPress={handleSubmit(onSubmit)}>
              <ButtonText fontSize="$sm" fontWeight="$medium">
                {createLoading || updateLoading ? "Submitting" : "Submit"}
              </ButtonText>
            </Button>
          </FormControl>
        </Box>
      </Box>
    </VStack>
  );
};

export default TodoForm;
