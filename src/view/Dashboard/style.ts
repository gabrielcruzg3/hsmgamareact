import styled from 'styled-components'

export const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #8c52e5;

    .wrapper{
        display: grid;

        .card{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #faf2f2;
            border-radius: 15px;
            padding: 10px;
            margin: 15px 0;

            img{
                border-radius: 100%
                width: 100px;
                height: 100px;
            }

            .content-information{
                margin-left: 15px;
                display: grid;
            }
        }
    }

`