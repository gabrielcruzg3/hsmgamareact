import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/62962-loaderanimation.json'
import { Container } from './style';

const Loader: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: animationData
    }
    return (
        <Container>
            <div>
                <h5> Carregando...</h5>
                <Lottie 
                    options={defaultOptions}
                    width={200}
                    height={200}
                />

            </div>
            
        </Container>
    );
}

export default Loader;