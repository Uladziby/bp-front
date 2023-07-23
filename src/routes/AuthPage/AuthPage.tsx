/** @format */

import { LoginForm } from "./Parts/LoginForm/LoginForm";
import { useQueryToken } from "graphql/hooks/useQueryToken";
import { ILoginForm } from "./Parts/LoginForm/type";
import { useState } from "react";

export const AuthPage = () => {
	const [dataLoginForm, setDataLoginForm] = useState<ILoginForm>();
	const { getProfile, user, error } = useQueryToken();

	if (error) {
		console.log(error.message);
	}

	const onHandleSubmit = (dataForm: ILoginForm) => {
		setDataLoginForm(dataForm);
		//getProfile(dataForm);
		console.log(dataForm);
	};

	return (
		<>
			<LoginForm title="Личный кабинет" nameSubmitButton="Войти" onSubmitHandler={onHandleSubmit} />
			<div>{user}</div>
		</>
	);
};
