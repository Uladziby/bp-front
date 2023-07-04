/** @format */

export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production" | "test";
			PUBLIC_URL: string;
			REACT_APP_PUBLIC_KEY_EMAILJS: string;
			REACT_APP_EMAIL_EMAILJS: string;
			REACT_APP_SERVICEID_EMAILJS: string;
			REACT_APP_TEMPLATEID_EMAILJS: string;
		}
	}
}
