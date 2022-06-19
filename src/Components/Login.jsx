import { Form } from './Form'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../store/slices/userSlice'

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();

        let localUser;

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    refreshToken: user.refreshToken,
                }))
                localUser = { email: user.email, id: user.uid, token: user.accessToken, refreshToken: user.refreshToken};
                localStorage.setItem('user', JSON.stringify(localUser));
                console.log(localUser);
                history('/');
            })
            .catch(() => alert("Ебобо, аккаунта нет!"))
    }

    return (
        <Form title="login" handleClick={handleLogin}></Form>
    )
}

export default Login