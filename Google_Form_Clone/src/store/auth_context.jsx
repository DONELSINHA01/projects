import React from "react";
export const AuthContext = React.createContext({
	siggnedEmail: "",
	getEmail: (item) => {},
});
