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
import { useState } from 'react';
import { useFirebase } from '../../../contexts/FirebaseContext';

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
		console.log('formData: ', formData);
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
		<Center>
			<VStack>
				<Heading>Log In</Heading>
				<Text>Hi! Welcome back, you've been missed</Text>
				<FormControl
					size='lg'
					isRequired
					isInvalid={'email' in errors}
				>
					<FormControlLabel>
						<FormControlLabelText>Email</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField
							type='text'
							placeholder='example@gmail.com'
							onChangeText={(value) => handleInputChange(value, 'email')}
						/>
					</Input>
					{/* <FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>An email error</FormControlErrorText>
					</FormControlError> */}
				</FormControl>

				<FormControl
					size='lg'
					isInvalid={'password' in errors}
					isRequired={true}
				>
					<FormControlLabel mb='$1'>
						<FormControlLabelText>Password</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField
							type='password'
							placeholder='password'
							onChangeText={(value) => handleInputChange(value, 'password')}
						/>
					</Input>
					<FormControlHelper>
						<FormControlHelperText>
							<Link onPress={() => navigation.navigate('ForgotPassword')}>
								<LinkText>Forgot Password?</LinkText>
							</Link>
						</FormControlHelperText>
					</FormControlHelper>
					{/* <FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>{getErrors('password')}</FormControlErrorText>
					</FormControlError> */}
				</FormControl>
				<FormControl>
					<Button
						bg='$darkBlue600'
						onPress={onSubmit}
					>
						<ButtonText
							fontSize='$sm'
							fontWeight='$medium'
						>
							Sign In
						</ButtonText>
					</Button>
				</FormControl>
				<HStack
					justifyContent='center'
					space='md'
				>
					<Center width={'$1/5'}>
						<Divider />
					</Center>
					<Text textAlign='center'>Or sign in with</Text>
					<Center width={'$1/5'}>
						<Divider />
					</Center>
				</HStack>
				<HStack
					justifyContent='space-between'
					paddingHorizontal={'$1/6'}
				>
					<Icon
						as={MoonIcon}
						color='black'
					/>
					<Icon
						as={MoonIcon}
						color='black'
					/>
					<Icon
						as={MoonIcon}
						color='black'
					/>
				</HStack>
				<HStack justifyContent='center'>
					<Text>Don't have an account?</Text>
					<Link onPress={() => navigation.navigate('Signup')}>
						<LinkText>Sign Up</LinkText>
					</Link>
				</HStack>
			</VStack>
		</Center>
	);
};

export default Login;
