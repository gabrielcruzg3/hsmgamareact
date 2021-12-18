import React, {useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import  addNewUser from "../../store/modules/user/action";
import { api } from "../../services/api";
import Loader from "../../components/Loader";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";

interface ICollaborator{
    id: number,
    name: string,
    email: string,
    photo: {
        path: string,
    }
}

const Dashboard: React.FC = () => {
    const [data, seData] = useState<ICollaborator[]>([]);
    const [isLoad, setIsLoad] = useState(false)
    const token = localStorage.getItem('@gamaServiceToken')?.replace(/["]/g, '')

    const dispatch = useDispatch();

    useEffect(() => {
        api.get('collaborator', {
            headers: {
                Authorization:  `Bearer ${token}`
            }
        }).then( response => {
            setIsLoad(true)
            seData(response.data)
        }).finally( () => setIsLoad(false))
    }, [token])

    useEffect(() => {
        data?.map(user => dispatch((addNewUser(user))))
    },[data, dispatch])

    if(isLoad){
        return <Loader />
    }

    return (
        <>
        <Header />
        <Container>
            <div className="wrapper">            
                <h1>Dashboard </h1>
                <div>
                    {data?.map(el =>(
                        <div className="card">                
                            <div key={el.id}>
                                <img src={`https://sistemadeagendamento-san5v.ondigitalocean.app/tmp/uploads/${el.photo.path}`} alt="" />
                                <div className="content-information">
									<p>Nome: {el.name}</p>
									<p>Email: {el.email}</p>
								</div>
                            </div>                    
                        </div>
                    ))}
                </div>                
            </div>
        </Container>
        < Footer />
        </>
    )
}

export default Dashboard;