import React, { useState } from "react";
import { Card } from 'primereact/card';
import "./Certif.css";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import bootC from "../../image/bootstrap.png";
import reactC from "../../image/react.png";
import nodeC from "../../image/node.png";
import devOpsC from "../../image/devOps.png";
import cloudC from "../../image/cloud.png";
import agileC from "../../image/agile.png";

function Certifications() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        console.log(newIndex)
        setActiveIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        console.log(newIndex)
        setActiveIndex(newIndex);
    };


    const images = [
        {
            src: reactC,
            alt: "React JS",
        },
        {
            src: nodeC,
            alt: "NodeJS -Expressand -MongoDB",
        },
        {
            src: bootC,
            alt: "Bootstrap 4",
        },
        {
            src: devOpsC,
            alt: "DevOps",
        },
        {
            src: cloudC,
            alt: " Cloud Computing",
        },
        {
            src: agileC,
            alt: "Agile Development and Scrum",
        },

    ];


    return (
        <>
            <Slide direction="down">
                <h4>
                    Certifications
                </h4>

            </Slide>

            <div className="gallery-container">
                <div className="image-container">
                    {images.map((item, index) => (
                        <Card className={`cd ${index === activeIndex ? "active" : ""}`}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <img alt="logo" src={item.src} height="200" width="300" className="p-mr-2" />
                                <h4>{item.alt}</h4>
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                <span className="text-teal-500"> {item.alt} </span>
                            </p>
                            <p className="text-center font-semibold mt-5" >
                                {item.alt}
                            </p>
                        </Card>

                    ))}
                </div>
                <button className="prev-btn" onClick={handlePrevClick}>
                &lt;
                </button>
                <button className="next-btn" onClick={handleNextClick}>
                &gt;
                </button>
            </div>
        </>
    );
}

export default Certifications;