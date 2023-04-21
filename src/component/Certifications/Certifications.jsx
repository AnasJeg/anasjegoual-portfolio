import React from 'react'
import styled from 'styled-components';

const Certifications = (props) => {
    const { img, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>{disc}</h1>
        </div>
    </Container>
  )
}

export default Certifications;

const Container = styled.div`
    height: 20rem;
    background-color: #F6F1E9;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1.5rem;
        }
    }
    :hover > .disc{
        bottom: 0;
    }

`