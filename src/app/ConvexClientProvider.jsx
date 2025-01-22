"use client";
import { UserDetailContext } from "@/contexts/UserDetailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useContext, useEffect, useState } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function ConvexClientProvider({ children }) {
	const [userDetail, setUserDetail] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				const storage = JSON.parse(localStorage.getItem("userInfo"));
				if (storage?.email) {
					setUserDetail(storage);
				}
			} catch (error) {
				console.error("Error parsing localStorage data:", error);
				setUserDetail(null);
			}
		}
	}, []);

	return (
		<ConvexProvider client={convex}>
			<GoogleOAuthProvider
				clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
			>
				<UserDetailContext.Provider
					value={{ userDetail, setUserDetail }}
				>
					{children}
				</UserDetailContext.Provider>
			</GoogleOAuthProvider>
		</ConvexProvider>
	);
}

// Custom Hook
export const useUserDetailContext = () => {
	return useContext(UserDetailContext);
};
