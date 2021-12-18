import React, {useState, useCallback, FormEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import { Container } from "./style";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface IData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData)
    // const [submit, setSubmit] = useState(false)
    const [ load, setLoad] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true)
        api.post('session', data).then(response => {
            // const sessionToken = JSON.stringify(response.data.token)
            // localStorage.setItem('@gamaServiceToken', sessionToken)
            setLoad(false)
            // if (response.status === 200) {
            //     setSubmit(true)
            // }                
            console.log(response.data)
            toast.success('Cadastro realizado com sucesso! Você está sendo redirecionado...',{
                hideProgressBar: false,
                onClose: () => navigate('/dashboard')
            })
            
        }).catch( e => {
            toast.error('Algo deu errado :/')
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
                <h5> SignUp </h5>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text" 
                        placeholder="Informe seu nome"
                        onChange={ e => setData({...data, name: e.target.value})}
                    />
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
                    <input type="submit" value="Cadastrar" />
                </form>
                <Link to="/signin"> Sign In</Link>
            </div>
        </div>
    </Container>
    <Footer />
    </>
    );
}

export default SignUp;