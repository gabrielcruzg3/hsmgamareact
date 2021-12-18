import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container } from "./style";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                
                <div>
                    <h1> Home </h1>
                    
                </div>
               
            </Container>
            <Footer />
        </>
    )
}

export default Home;