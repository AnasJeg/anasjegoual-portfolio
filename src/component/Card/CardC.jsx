import React, { useRef } from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import bootC from "../../image/bootstrap.png";
import reactC from "../../image/react.png";
import nodeC from "../../image/node.png";
import devOpsC from "../../image/devOps.png";
import cloudC from "../../image/cloud.png";
import agileC from "../../image/agile.png";
import Certifications from '../Certifications/Certifications';
import Android from '../../image/Android-java.png'

let data = [
    {
        img: reactC,
        disc: "React JS",
    },
    {
        img: nodeC,
        disc: "NodeJS -Expressand -MongoDB",
    },
    {
        img: bootC,
        disc: "Bootstrap 4",
    },
    {
        img: devOpsC,
        disc: "DevOps",
    },
    {
        img: cloudC,
        disc: " Cloud Computing",
    },
    {
        img: agileC,
        disc: "Agile Development and Scrum",
    },
    {
        img: Android,
        disc : "Spécialisation Android App Development",
    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const CardP = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Certifications item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default CardP;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: black;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`