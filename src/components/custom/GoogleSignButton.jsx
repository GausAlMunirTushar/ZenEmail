"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../ui/button";
import axios from "axios";

const GoogleSignButton = () => {
	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			try {
				console.log("Token Response:", tokenResponse);

				const userInfo = await axios.get(
					"https://www.googleapis.com/oauth2/v3/userinfo",
					{
						headers: {
							Authorization: `Bearer ${tokenResponse?.access_token}`,
						},
					},
				);

				console.log("User Info:", userInfo.data);
				if (typeof window !== "undefined") {
					localStorage.setItem(
						"userInfo",
						JSON.stringify(userInfo?.data),
					);
				}
				// Save user info to the database
			} catch (error) {
				console.error(
					"Error fetching user info:",
					error.response?.data || error.message,
				);
			}
		},
		onError: (errorResponse) =>
			console.error("Login Error:", errorResponse),
	});
	return (
		<div>
			<Button
				onClick={googleLogin}
				className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-500"
			>
				Get Started{" "}
			</Button>
		</div>
	);
};

export default GoogleSignButton;
