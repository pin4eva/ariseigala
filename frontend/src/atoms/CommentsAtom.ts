import { atom } from "recoil";
import { IComment } from "types/interface";

export const CommentsAtom = atom({
	key: "CommentsAtoms",
	default: [] as IComment[],
});
