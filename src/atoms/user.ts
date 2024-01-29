import { atom } from "recoil";
import { GitHubUser } from "../types/GithubUser";

const user = atom<GitHubUser | null>({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: null,
});

export default user