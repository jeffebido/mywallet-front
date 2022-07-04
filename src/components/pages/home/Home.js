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
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        const promise = axios.get(`https://jeffebido-mywallet-back.herokuapp.com/get-registers`, config);

        promise.then(response => {

            setRegisters(response.data);
            
            let sum = 0;

            response.data.forEach(el => {

                sum = el.type == "income" ? sum + parseFloat(el.value)  : sum - parseFloat(el.value);

                
            });
            setTotal(parseFloat(sum).toFixed(2));
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

                        <>
                            {registers.map( item =>
                            
                                        <Item>
                                            <div className="title">
                                                <span>{item.time}</span>
                                                {item.description}
                                            </div>
                                            <div className={item.type == "income" ? "value green" : "value red" }  >
                                                {item.type == "income" ? "+ " : "- " }
                                                {item.value}
                                            </div>
                                        </Item> 
                            )}

                            <Totals>
                                <div>TOTAL</div>
                                <div>{total}</div>
                            </Totals>
                       </>
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
    position: relative;
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
const Totals = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
`;