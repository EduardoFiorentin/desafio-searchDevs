import { atom } from "recoil";

const repositories = atom({
    key: 'repositories',
    default: []
});

export default repositories