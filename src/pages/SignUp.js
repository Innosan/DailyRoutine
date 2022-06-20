import { SignUpForm } from "components/SignUpForm";
import { Link } from "react-router-dom";

import '../style/SignUp.css'

const SignUp = () => {
    return (
        <div className="wrapper">
            <h1 className="greeting-msg">Ya' still walkin' with soul? Try to lose it.</h1>

            <SignUpForm />

            <p>
                Already lose? <Link className="link" to={"/signin"}>Then Sign In!</Link>
            </p>
        </div>
    )
}

export default SignUp;