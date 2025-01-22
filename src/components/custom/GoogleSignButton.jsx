"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../ui/button";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const GoogleSignButton = () => {
	const CreateUser = useMutation(api.users.CreateUser);

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

				const user = userInfo?.data;

				// Save user info to the database
				const result = await CreateUser({
					name: user?.name,
					email: user?.email,
					picture: user?.picture,
				});
				const userDetails = {
					...user,
					_id: result?.id ?? result,
				};
				if (typeof window !== "undefined") {
					localStorage.setItem(
						"userInfo",
						JSON.stringify(userDetails),
					);
				}
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
