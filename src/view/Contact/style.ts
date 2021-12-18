import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #cccccc;
    
    .form--wrapper{
        display: grid;
        text-align: center;

        .card{
            background-color: #fff;
            padding: 22px;
            border-radius: 15px;

            form{
                display: grid;

                input{
                    margin: 10px 0;
                }
            }
        }
    }
`