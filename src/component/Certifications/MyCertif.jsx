import React from 'react'
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import CardC from '../Card/CardC'
const MyCertif = () => {
    return (
        <Container id='project'>
            <Zoom>
                <h1>Mes <span className="green">certificats</span></h1>

            </Zoom>
            <Slide>
                <CardC />
            </Slide>
        </Container>
    )
}

export default MyCertif;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div`
margin-top: 50px;
`