import { Button } from "../ui/button";

const GoogleSignButton = () => {
	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			console.log(tokenResponse);
			const userInfo = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization: "Bearer " + tokenResponse.accessToken,
					},
				},
			);

			console.log(userInfo);
		},
		onError: (errorResponse) => console.log(errorResponse),
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
