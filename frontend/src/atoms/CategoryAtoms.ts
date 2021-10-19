import { atom } from "recoil";

export const CategoriesAtom = atom({
  key: "categories-atom",
  default: [],
});

export const CategoryAtom = atom({
  key: "category-atom",
  default: null,
});
