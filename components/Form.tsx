import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useMemo,
	ReactNode,
} from 'react';

const Form = ({ fields }) => {
	const [formData, setFormData] = useState({});
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
		Object.entries(formData).forEach(([key, value]) => {
			if (!value) {
				setErrors({
					...errors,
					[key]: `${key} is required`,
				});
				return false;
			}
		});
	};

	const onSubmit = () => {
		/**
		 * run through validation
		 * handle submit if passed
		 * - validation fail should automatically trigger fail error throw
		 */
		/**
		 * set response pass/fail validations
		 */
	};

	const formFields = {
		input: '',
		email: '',
		password: '',
		checkbox: '',
		date: '',
		select: '',
		checklist: '',
		radioList: '',
		button: '',
		textarea: '',
	};

	return <></>;
};
