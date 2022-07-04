import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../../../providers/Auth"; 

export default function NewIncome() {

    const navigate = useNavigate();

    const [formValue, setFormValue] = useState("");
    const [formDesc, setFormDesc] = useState("");

    return (

        <>  
            <Container>

                <Header>
                    <h1>Nova Entrada </h1>
                </Header>

                <form>
                    <input type="number" placeholder="Valor" value={formValue} onChange={e => setFormValue(e.target.value)} required ></input>
                    <input type="text" placeholder="Descrição" value={formDesc} onChange={e => setFormDesc(e.target.value)} required ></input>
                    
                    <button type="submit" className="btn">Salvar entrada</button>
                </form>

            </Container>
        </>
    );
}

const Container = styled.div`
	width: 100%;
    height: 100vh;
	background: #8C11BE;
    padding-left: 40px;
    padding-right: 40px;

    input, .btn{
        margin-bottom: 15px;
    }
`;
const Header = styled.div`
	width: 100%;
    color: #fff;
    padding-top: 25px;
    padding-bottom: 45px;
`;