import { atom } from "recoil";

const user = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: {}
});

export default user