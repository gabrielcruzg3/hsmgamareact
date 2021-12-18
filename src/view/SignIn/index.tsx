import React, {useState, useCallback, FormEvent} from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import { Container } from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface IData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData)
    // const [submit, setSubmit] = useState(false)
    const [ load, setLoad] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true)
        api.post('session', data).then(response => {
            const sessionToken = JSON.stringify(response.data.token)
            localStorage.setItem('@gamaServiceToken', sessionToken)
            setLoad(false)
            // if (response.status === 200) {
            //     setSubmit(true)
            // }                
            console.log(response.data)
            toast.success('Login realizado com sucesso',{
                hideProgressBar: false,
                onClose: () => navigate('/dashboard')
            })
            
        }).catch( e => {
            toast.error('ALgo deu errado :/')
                setLoad(false)
            })
    }, [data, navigate])

    if(load){
        return (
            <Loader />
        )
    }

    return (
        <>
        <Header />
    <Container>
        <div className="form--wrapper">
            <div className="card">
                <h5> SignIn </h5>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="email" 
                        placeholder="Informe seu email"
                        onChange={ e => setData({...data, email: e.target.value})}
                    />
                    <input 
                        type="password" 
                        placeholder="Crie sua senha"
                        onChange={ e => setData({...data, password: e.target.value})}    
                    />
                    <input type="submit" value="Logar" />
                </form>
                <Link to="/signup"> Sign Up</Link>
            </div>
        </div>
    </Container>
    <Footer />
    </>
    
    );
}

export default SignIn;