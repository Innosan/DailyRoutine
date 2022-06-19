import { useState } from "react"

const Form = ({ title, handleClick }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input
                type="email"
                value={email}
                name="userMail"
                id="userMail"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
            />
            <input
                type="password"
                value={pass}
                name=""
                id=""
                placeholder="samplepass"
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={() => handleClick(email, pass, name)}>{title}</button>
        </div>
    )
}

export { Form }