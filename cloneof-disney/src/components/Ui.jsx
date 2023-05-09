import React from "react";
import { useState } from "react";
import "./style.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";

const Ui = () => {
	const [signedEmail, setSiggnedEmail] = useState(
		localStorage.getItem("email")
	);
	const [obj, setObj] = useState({
		name: "",
		email: "",
		phone: "",
		tenth: "",
		twelth: "",
		graduation: "",
		graduationYear: "",
		logginEmail: signedEmail,
		resume: "",
		option: "",
	});
	const storedElement = [];
	const handleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				localStorage.setItem("email", res.user.email);
				setSiggnedEmail(localStorage.getItem("email"));

				setObj((res) => {
					return {
						...obj,
						logginEmail: localStorage.getItem("email"),
					};
				});
				console.log("usercredential", res);
			})
			.catch((error) => console.log(error));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch(
			"https://form-9a509-default-rtdb.asia-southeast1.firebasedatabase.app/GoogleFormDatabase.json",
			{
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(obj),
			}
		)
			.then((res) => {
				console.log("data stored", res);
				setObj(() => {
					return {
						name: "",
						email: "",
						phone: "",
						tenth: "",
						twelth: "",
						graduation: "",
						graduationYear: "",
						logginEmail: signedEmail,
						resume: "",
						option: "",
					};
				});
			})
			.catch((err) => {
				throw err;
			});

		console.log(storedElement);
	};
	const nameHandle = (e) => {
		setObj({ ...obj, name: e.target.value });
	};
	const tenthHandle = (e) => {
		setObj({ ...obj, tenth: e.target.value });
	};
	const twelthHandle = (e) => {
		setObj({ ...obj, twelth: e.target.value });
	};
	const phoneHandle = (e) => {
		setObj({ ...obj, phone: e.target.value });
	};
	const emailHandle = (e) => {
		setObj({ ...obj, email: e.target.value });
	};
	const graduationHandle = (e) => {
		setObj({ ...obj, graduation: e.target.value });
	};
	const graduationYearHandle = (e) => {
		setObj({ ...obj, graduationYear: e.target.value });
	};
	const resumeHandle = (e) => {
		setObj({ ...obj, resume: e.target.value });
	};
	const optionHandle = (e) => {
		setObj({ ...obj, option: e.target.value });
	};
	return (
		<>
			<div className="body">
				<form onSubmit={handleSubmit}>
					<div className="desc box">
						<h1>Details Sharing Page</h1>
						<hr />
						<br />
						<h4>{signedEmail}</h4>

						{signedEmail ? (
							<h4
								style={{ cursor: "pointer" }}
								onClick={handleSignIn}>
								SwitchAccount
							</h4>
						) : (
							<h4
								style={{ cursor: "pointer" }}
								onClick={handleSignIn}>
								SignIn
							</h4>
						)}

						<br />
						<p>
							The name and photo associated with your Google
							account will be recorded when you upload files and
							submit this form. Your email is not part of your
							response.
						</p>
						<br />
						<h3 className="required">
							<small>
								<em>*</em>
							</small>{" "}
							Required
						</h3>
					</div>
					<div className="box">
						<h3>
							Full Name{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="text"
							value={obj.name}
							onChange={nameHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							{/* {obj.} */}
							Email Id{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							value={obj.email}
							type="email"
							onChange={emailHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							Mobile{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="text"
							pattern="[1-9]{1}[0-9]{9}"
							// maxLength="10"
							maxLength={10}
							value={obj.phone}
							onChange={phoneHandle}
							placeholder="phone Number"
						/>
					</div>
					<div className="box">
						<h3>
							10th Percentage{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="text"
							min={33}
							maxLength={2}
							value={obj.tenth}
							onChange={tenthHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							12th Percentage{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="text"
							min={33}
							maxLength={2}
							value={obj.twelth}
							onChange={twelthHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							Graduation Percentage{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="text"
							min={33}
							maxLength={2}
							value={obj.graduation}
							onChange={graduationHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							Graduation Year{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							required
							type="date"
							min="13"
							value={obj.graduationYear}
							onChange={graduationYearHandle}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							Resume{" "}
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<br />
						<input
							onChange={resumeHandle}
							required
							type="file"
							value={obj.resume}
							placeholder="Your answer"
						/>
					</div>
					<div className="box">
						<h3>
							Skills
							<em>
								<small aria-label="required">*</small>
							</em>
						</h3>
						<select onChange={optionHandle} value={obj.option}>
							<option value=""></option>
							<option selected value="Js">
								Js
							</option>
							<option value="CSS">CSS</option>
							<option value="Java">Java</option>
							<option value="React">React</option>
						</select>
					</div>
					<div className="controls">
						<button type="submit">Submit</button>

						<button type="reset">Clear form</button>
					</div>

					<footer>
						<h4>Made in ❤️ with India</h4>
					</footer>
				</form>
			</div>
		</>
	);
};

export default Ui;
