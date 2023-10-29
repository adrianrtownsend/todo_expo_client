import * as React from 'react';
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
} from '@gluestack-ui/themed';
import Navigation from '../..';

const ForgotPassword = ({ navigation }) => {
	return (
		<Center>
			<VStack>
				<Heading>Forgot Password</Heading>
				<Text>Enter your email to receive a password recovery link.</Text>
				<FormControl size='lg'>
					<FormControlLabel>
						<FormControlLabelText>Email</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField
							type='text'
							placeholder='example@gmail.com'
						/>
					</Input>
				</FormControl>

				<FormControl>
					<Button bg='$darkBlue600'>
						<ButtonText
							fontSize='$sm'
							fontWeight='$medium'
						>
							Send Recovery Link
						</ButtonText>
					</Button>
				</FormControl>
				<HStack justifyContent='center'>
					<Text>Already have an account?</Text>
					<Link onPress={() => navigation.navigate('Login')}>
						<LinkText>Log In</LinkText>
					</Link>
				</HStack>
			</VStack>
		</Center>
	);
};

export default ForgotPassword;
