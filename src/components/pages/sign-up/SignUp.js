import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../../../providers/Auth"; 

export default function SignUp() {


    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formConfirmPassword, setFormConfirmPassword] = useState("");

    return (

        <>  
            <Container>
                <Logo>MyWallet</Logo>

                <form>
                    <input type="text" placeholder="Nome" value={formName} onChange={e => setFormName(e.target.value)} required ></input>
                    <input type="email" placeholder="E-mail" value={formEmail} onChange={e => setFormEmail(e.target.value)} required ></input>
                    <input type="password" placeholder="Senha" value={formPassword} onChange={e => setFormPassword(e.target.value)} required ></input>
                    <input type="password" placeholder="Confirme a senha" value={formConfirmPassword} onChange={e => setFormConfirmPassword(e.target.value)} required ></input>

                    <button type="submit" className="btn">ENTRAR</button>
                </form>

                <Footer>
                    <Link to={`/`} >
                        Já tem uma conta? Entre agora!
                    </Link>
                </Footer>
            </Container>
        </>
    );
}

const Container = styled.div`
	width: 100%;
    height: 100vh;
	background: #8C11BE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    input, .btn{
        margin-bottom: 15px;
    }
`;
const Logo = styled.div`
	font-family: 'Paytone One', sans-serif;
    color: #fff;
    font-size: 40px;
    margin-bottom: 50px;
`;
const Footer = styled.div`
    margin-top: 35px;
    a{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;