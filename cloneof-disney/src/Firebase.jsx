import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCeucpIC-AqSiKoyHHi3w-d9kCT_VnvsEE",
	authDomain: "formuiclone.firebaseapp.com",
	projectId: "formuiclone",
	storageBucket: "formuiclone.appspot.com",
	messagingSenderId: "189560397126",
	appId: "1:189560397126:web:972a83527691aba0c11947",
	measurementId: "G-1ELETQzSX5Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
