import styled from "styled-components";

export const NavBar = styled.nav`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 12px;

    .nav-links{

        a{
            text-decoration: none;
            color: #000;
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            margin: 12px;
            transition: 0.6s;

            &:hover{
                color: #676666;

            }
        }

    }
`