export const SERVER_URI =
	process.env.NODE_ENV === "production"
		? "https://server.ariseigalaonline.com/"
		: "http://localhost:8000";

export const TOKEN_NAME = "__ar";

export const WS_URI =
	process.env.NODE_ENV === "production"
		? `wss://${SERVER_URI}`
		: "ws://localhost:8000";
