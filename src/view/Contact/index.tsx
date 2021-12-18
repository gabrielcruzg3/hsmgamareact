import React, { useState, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { api } from '../../services/api'

interface IData {
    name: string;
    email: string;
}

const Contact: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData)
    const [submit, setSubmit] = useState(false)

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then(response => {
            if (response.status === 200) {
                setSubmit(true)
            }
        })
    }, [data])

    return (
        <Container>
            <div className="form--wrapper ">

                Name: {data?.name} 
                Email:  {data?.email} 
                <div className="card">
                    {submit ? (
                        <div>
                            <h1> dados enviados</h1>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nome"
                                id="name"
                                placeholder="Nome"
                                onChange={e => setData({ ...data, name: e.target.value })}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={e => setData({ ...data, email: e.target.value })}
                            />
                            <input
                                type="submit"
                                value="Enviar"
                            />
                        </form>
                    )}
                    <h1> Contact </h1>

                </div>
                <br></br>
                <Link to="/" > Home Page</Link>
            </div>
        </Container>
    )
}

export default Contact;