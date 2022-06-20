import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { setUser } from '../store/slices/userSlice'

import { Form } from './Form'

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

                history('/');
            })
            .catch(() => alert("Таких данных нет в списке участников клана НАС РАНО, вы ошиблись!"))
    }

    return (
        <Form title="Log In" handleClick={handleLogin}></Form>
    )
}

export default Login