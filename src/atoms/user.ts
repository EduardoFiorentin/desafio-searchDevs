import { atom } from "recoil";
import { Owner } from "../types/types";

const user = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: [],
});

export default user