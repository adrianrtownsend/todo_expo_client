import { useState } from 'react';
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
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../graphql';
import { useFirebase } from '../../../contexts/FirebaseContext';

const Signup = ({ navigation }) => {
	const firebase = useFirebase();
	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});
	const [reqError, setreqError] = useState<string | undefined>();

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
		console.log('formData submit: ', formData);
		if (loading) console.log('Submitting...');
		if (error) console.log(`Submission error! ${error.message}`);
		try {
			const token = await createUser({
				variables: {
					username: formData.username,
					email: formData.email,
					firstName: formData.firstName,
					lastName: formData.lastName,
					password: formData.password,
				},
			});
			firebase.loginWithCustomToken(token);
		} catch (error) {
			setreqError(`Error ${error}`);
		}
	};

	return (
		<VStack>
			<Center marginVertical={'$10'}>
				<Heading>Create Account</Heading>
				<Text>
					Fill your information below or register with you social account.
				</Text>
			</Center>
			<Center>
				<VStack space='lg'>
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>Username</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField
								type='text'
								placeholder='johnDoe23'
								onChangeText={(value) => handleInputChange(value, 'username')}
							/>
						</Input>
					</FormControl>
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>First Name</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField
								type='text'
								placeholder='John'
								onChangeText={(value) => handleInputChange(value, 'firstName')}
							/>
						</Input>
					</FormControl>
					<FormControl>
						<FormControlLabel>
							<FormControlLabelText>Last Name</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField
								type='text'
								placeholder='Doe'
								onChangeText={(value) => handleInputChange(value, 'lastName')}
							/>
						</Input>
					</FormControl>
					<FormControl>
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
					</FormControl>

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
								onChangeText={(value) => handleInputChange(value, 'password')}
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
								onChangeText={(value) =>
									handleInputChange(value, 'confirmPassword')
								}
							/>
						</Input>
						<FormControlError>
							<FormControlErrorIcon as={AlertCircleIcon} />
							<FormControlErrorText>
								At least 6 characters are required.
							</FormControlErrorText>
						</FormControlError>
					</FormControl>

					<Checkbox value='agree'>
						<CheckboxIndicator mr='$2'>
							<CheckboxIcon as={CheckIcon} />
						</CheckboxIndicator>
						<CheckboxLabel>
							Agree to{' '}
							<Link>
								<LinkText>Terms &amp; Conditions</LinkText>
							</Link>
						</CheckboxLabel>
					</Checkbox>

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
						<Text textAlign='center'>Or sign up with</Text>
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
						<Text>Already have an account?</Text>
						<Link onPress={() => navigation.navigate('Login')}>
							<LinkText>Log In</LinkText>
						</Link>
					</HStack>
				</VStack>
			</Center>
		</VStack>
	);
};

export default Signup;
