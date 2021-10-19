export const truncateTitle = (text: string | undefined, length = 8): string => {
	const words = text?.split(" ");
	const newText = words?.slice(0, length).join(" ");

	return `${newText}${words && words?.length > 5 ? "..." : ""}`;
};

export const truncateDescription = (text: string, length = 20): string => {
	const words = text.split(" ");
	const newText = words.slice(0, length).join(" ");

	return `${newText}${words?.length > 20 ? "..." : ""}`;
};
