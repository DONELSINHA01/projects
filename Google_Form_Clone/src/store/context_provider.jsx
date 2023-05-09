import React from "react";
import { useReducer } from "react";
import { AuthContext } from "./auth_context";
const defaultState = {
	siggnedEmail: localStorage.getItem("email"),
	getEmail: (item) => {},
};
const contextReducer = (state, action) => {
	if (action.type === "GET_EMAIL") {
	}
	return defaultState;
};
const Context_Provider = (props) => {
	const [cartState, dispatchAction] = useReducer(
		contextReducer,
		defaultState
	);
	const AddEmail = (item) => {
		dispatchAction({ type: "GET_EMAIL", item: item });
	};
	const HelperContext = {
		siggnedEmail: cartState.siggnedEmail,
		getEmail: AddEmail,
	};
	return (
		<AuthContext.Provider value={HelperContext}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default Context_Provider;
