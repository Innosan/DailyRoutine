import { useSelector } from "react-redux";

export function useAuth() {
    const { email, token, refreshToken, userId } = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        refreshToken,
        userId,
    };
}