import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../../../providers/Auth"; 

export default function NewExpense() {

    const navigate = useNavigate();

    const {user} = useAuth();

    const [formValue, setFormValue] = useState("");
    const [formDesc, setFormDesc] = useState("");

    function enviaForm (event) {

        event.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${user.token}`, type: "expense" }
        };

        axios.post("https://jeffebido-mywallet-back.herokuapp.com/new-register", {
            value: formValue,
            description: formDesc
		}, config)
        .then( response => {




            navigate("/home");
            
           
        } )
        .catch((err) => {

            console.error(err);
            alert("Ddados Inválidos");
        });
    }

    return (

        <>  
            <Container>

                <Header>
                    <h1>Nova Saida </h1>
                </Header>

                <form onSubmit={enviaForm}>
                    <input type="number" placeholder="Valor" value={formValue} onChange={e => setFormValue(e.target.value)} required ></input>
                    <input type="text" placeholder="Descrição" value={formDesc} onChange={e => setFormDesc(e.target.value)} required ></input>
                    
                    <button type="submit" className="btn">Salvar saida</button>
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
