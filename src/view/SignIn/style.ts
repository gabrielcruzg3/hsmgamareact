import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    widht: 100%;
    height: 100vh;
    background-color: #8c52e5;

    .form--wrapper{
        display: grid;
        text-align: center;

        .card{
            display: grid;
            background-color: #f9f9f9;
            max-height: 400px;
            padding: 22px;
            border-radius: 8px;

            h5{
                font-family: 'robot', sans-serif;
                font-size: 22px;
                color: #8c52e5
            }
            
            a{
                text-decoration: none;
                text-align: center;
                color: #8c52e5;
                font-family: 'Roboto', sans-serif;
                margin: 19px 0;
            }

            form{
                display: grid;

                input{
                    margin: 10px 0 0 10px;
                    height: 25px;
                    padding: 0 5px 0 5px;
                    border-radius: 8px;
                    border: 1px solid #e2e2e2;
                    text-align: center;

                }

                input[type="submit"]{
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    background-color: #68de5a;
                    padding: 15px;
                    border-radius: 8px;
                    transition: 0.6s;
                    &:hover{
                        background: #8c52e5;
                        color:#fff;
                    }
                }
            }
        }
    }
`