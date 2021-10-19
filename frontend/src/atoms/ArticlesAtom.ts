import { atom } from "recoil";
import { IArticle } from "types/interface";

export const ArticlesAtom = atom({
	key: "ArticlesAtom",
	default: [] as unknown as IArticle[],
});
