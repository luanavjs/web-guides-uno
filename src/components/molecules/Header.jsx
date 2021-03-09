import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/Container";
import { Link } from "react-router-dom";
import Theme from "../atoms/Theme";
import Breakpoints from "../atoms/Breakpoints";

const Title = styled(Link)`
    font-family: 'Segoe UI';
    font-weight: 700;
    text-align: left;
    color: ${Theme.text.secondary};
    :hover{
        text-decoration: none;
    }
    @media ${Breakpoints.mobileS}{
        font-size: 24px;
    }
    @media ${Breakpoints.tablet}{
        font-size: 28px;
    }
`;

export default function Header(){
    const Header = styled.header`
        background: ${Theme.color.primary};
        
        display: flex;
        align-items: center;
        box-shadow: 0px 2px 8px 0px ${Theme.color.primary}BF;
        @media ${Breakpoints.mobileS}{
            height: 55px;
        }
        @media ${Breakpoints.tablet}{
            height: 65px;
        }
    `;

    return(
        <Header>
            <Container>
                <Title to="/"> Guides UNO </Title>
            </Container>
        </Header>
    );
}