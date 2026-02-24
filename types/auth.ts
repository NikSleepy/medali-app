export type Auth = {
    login: boolean;
    setLogin: (login: boolean) => void;
    clearLogin: () => void;
}