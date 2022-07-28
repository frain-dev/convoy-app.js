export interface IConfig {
	/**
	 * Convoy self hosted uri for the app portal (generated from your backend).
	 */
	uri: string;
	/**
	 * API Key used for bearer token authentication for app portal
	 */
	api_key: string;
}

export interface BatchResend {
	ids: string[];
}
