import { useState } from "react"
import styled, { css } from "styled-components";

const Input = styled.input`
    background: transparent;
    border: none;
    color: white;
    font-family: Josefin;
    width: 350px;
    margin-block-end: 25px;
    margin-block-start: 25px;
    text-align: center;
    border-radius: 8px;
    font-size: 22px;
    border-bottom: solid 2px #F2BC79;
    transition: .2s;

    :focus {
        border-color: #F27561;
        outline: none;
    }

    @media screen and (max-width: 425px){
        width: 300px;
    }

    ${props => props.primary && css`
        width: 250px;
    `}
`

const Button = styled.button`
    font-size: 34px;
    padding: 10px 60px 10px 60px;
    margin: 55px 0 35px 0;
    background: transparent;
    color: white;
    border-color: transparent;
    border-radius: 48px;
    transition: .5s;

    :hover {
        color: #353535;
        background-color: #F27561; 
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 425px){
        width: 350px;
    }
`

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const [name, setName] = useState('');

    return (
        <FormContainer>
            <Input
                primary
                type="email"
                value={email}
                name="userMail"
                id="userMail"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
            />
            <Input
                type="password"
                value={pass}
                name=""
                id=""
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                onChange={(e) => setPass(e.target.value)}
            />
            <Button onClick={() => handleClick(email, pass)}>{title}</Button>
        </FormContainer>
    )
}

export { Form }