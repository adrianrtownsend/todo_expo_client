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
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { useMutation } from "@apollo/client";
import { isObjectEmpty } from "../../../helpers";
import { useForm, Controller } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import { CREATE_TODO, UPDATE_TODO } from "../../../graphql";

const TodoForm = () => {
  const route = useRoute();
  const [
    createTodo,
    { data: createData, loading: createLoading, error: createError },
  ] = useMutation(CREATE_TODO);
  const [
    updateTodo,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_TODO);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const { todo } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: todo.title ?? "",
      description: todo.description ?? "",
      isCompleted: todo.isCompleted ?? false,
    },
  });

  const onSubmit = async (data) => {
    if (isObjectEmpty(errors)) {
      if (todo) {
        createTodo({ variables: data }).then(() => {
          setFormSuccess("Sucessfully created todo");
        });
      } else {
        updateTodo({ variables: { ...data, id: todo.id } }).then(() => {
          setFormSuccess("Sucessfully updated todo");
        });
      }
    }
  };

  if (createError) setFormError(createError.message);
  if (updateError) setFormError(updateError.message);

  return (
    <VStack>
      <VStack></VStack>
      <Box>
        <Box>
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
