import styled from 'styled-components';

const Button = styled.a`    
    background: transparent;
    border-radius: 48px;
    cursor: pointer;
    color: white !important;
    border: none;
    padding: 12px 30px 12px 30px;
    margin-left: -30px;
    font-size: 36px !important;
    margin-top: 25px;
    transition: .3s;

    :hover {
        color: #353535 !important;
        background: #F2BC79;
    }
    
    @media screen and (max-width: 425px){
    }
`

export {Button};