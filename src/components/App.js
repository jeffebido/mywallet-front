import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "../providers/Auth"; 


import SignUp from "./pages/sign-up/SignUp";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewIncome from "./pages/new-income/NewIncome";
import NewExpense from "./pages/new-expense/NewExpense";


export default function App() {

    return (

        <>  
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/new-income" element={<NewIncome />} />
                        <Route path="/new-expense" element={<NewExpense />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Login />} />
                    </Routes> 
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}