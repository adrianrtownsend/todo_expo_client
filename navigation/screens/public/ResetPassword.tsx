import * as React from 'react';
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
} from '@gluestack-ui/themed';

const ResetPassword = () => {
	return (
		<VStack>
			<Center marginVertical={'$10'}>
				<Heading>New Password</Heading>
				<Text>
					Your new password must be different from previously used passwords.
				</Text>
			</Center>
			<Center>
				<VStack space='lg'>
					<FormControl
						size='md'
						isDisabled={false}
						isInvalid={false}
						isReadOnly={false}
						isRequired={false}
					>
						<FormControlLabel mb='$1'>
							<FormControlLabelText>Password</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField
								type='password'
								defaultValue='12345'
								placeholder='password'
							/>
						</Input>
						<FormControlError>
							<FormControlErrorIcon as={AlertCircleIcon} />
							<FormControlErrorText>
								At least 6 characters are required.
							</FormControlErrorText>
						</FormControlError>
					</FormControl>
					<FormControl
						size='md'
						isDisabled={false}
						isInvalid={false}
						isReadOnly={false}
						isRequired={false}
					>
						<FormControlLabel mb='$1'>
							<FormControlLabelText>Confirm Password</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField
								type='password'
								defaultValue='12345'
								placeholder='password'
							/>
						</Input>
						<FormControlError>
							<FormControlErrorIcon as={AlertCircleIcon} />
							<FormControlErrorText>
								At least 6 characters are required.
							</FormControlErrorText>
						</FormControlError>
					</FormControl>

					<FormControl>
						<Button bg='$darkBlue600'>
							<ButtonText
								fontSize='$sm'
								fontWeight='$medium'
							>
								Sign In
							</ButtonText>
						</Button>
					</FormControl>
				</VStack>
			</Center>
		</VStack>
	);
};

export default ResetPassword;
