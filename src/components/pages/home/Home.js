import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useAuth} from "../../../providers/Auth"; 


import LogoutIcon from '../../../img/logout-icon.svg';
import PlusIcon from '../../../img/plus-icon.svg';
import MinusIcon from '../../../img/minus-icon.svg';

export default function Home() {

    const navigate = useNavigate();
    const {user} = useAuth();

    const [registers, setRegisters] = useState();


    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get(`http://127.0.0.1:5000/get-registers`, config);

        promise.then(response => {

            setRegisters(response.data);
            console.log(response.data);
        });

     
    }, []);

    return (

        <>  
            <Container>

                <Header>
                    <h1> Olá, {user.name} </h1>
                    <img src={LogoutIcon}/>
                </Header>
                
                <Records>
                    {registers == null ? (<DefaultInfoBox>Não há registros de entrada ou saída</DefaultInfoBox>) : (


                        registers.map( item =>
                        
                                    <Item>
                                        <div className="title">
                                            <span>05/11</span>
                                            {item.description}
                                        </div>
                                        <div className={item.type == "income" ? "value green" : "value red" }  >
                                            {item.type == "income" ? "+ " : "- " }
                                            {item.value}
                                        </div>
                                    </Item> 
                        )



                    )}
                </Records>

                <Footer>
                    <Link to={`/new-income`} >
                        <Buttom>
                            
                            <img src={PlusIcon}/>
                            <h4>Nova <br /> entrada</h4>
                            
                        </Buttom>
                    </Link>
                    
                    
                    <Link to={`/new-expense`} >
                        <Buttom>
                            <img src={MinusIcon}/>
                            <h4>Nova <br /> saída</h4>
                        </Buttom>
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
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
`;
const Header = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding-top: 25px;
    padding-bottom: 25px;
`;
const Records = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
`;
const Footer = styled.div`
    height: 180px;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    a{
        color: #fff;
        text-decoration: none;
        width: 49%;
    }
`;
const Buttom = styled.div`
    height: 100%;

    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    
    font-size: 17px;
    line-height: 20px;
    color: #fff;
    padding: 15px;
    img{
        height: 25px;
        width: auto;
    }
   
`;
const DefaultInfoBox = styled.div`
    color: #868686;
    font-size: 20px;
    line-height: 23px;
    height: 100%;
    width: 100%;
    display: flex;//flex ou none
    align-items: center;
    justify-content: center;
    padding: 75px;
`;
const Item = styled.div`
    font-size: 16px;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
        color: #000000;
        span{
            padding-right: 15px;
            color: #C6C6C6;
        }
    }
    .value{
        font-weight: 600;
    }
    .value.green{
        color: #03AC00;
    }
    .value.red{
        color: #C70000;
    }
`;