// const SERVER_URI = "hela-server-d8vwy.ondigitalocean.app";
export const SERVER_URI = process.env.SERVER_URI || "http://localhost:8000";

export const TOKEN_NAME = "__ar";

export const HTTP_URI =
	process.env.NODE_ENV === "production"
		? "https://araiseigalaonline.com"
		: "http://localhost:8000";

export const WS_URI =
	process.env.NODE_ENV === "production"
		? `wss://${SERVER_URI}`
		: "ws://localhost:8000";
