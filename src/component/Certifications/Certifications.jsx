import React, { useState } from "react";
import este from "../../image/este.png";
import emsi from "../../image/logo-emsi.png";
import fstg1 from "../../image/fst.png";
import fstg2 from "../../image/fst.png";
import fstg3 from "../../image/fst.png";
import fstg4 from "../../image/fst.png";
import fstg5 from "../../image/fst.png";
import { Card } from 'primereact/card';
import "./Certif.css";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

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
            src: fstg1,
            alt: "Image 1",
        },
        {
            src: fstg2,
            alt: "Image 2",
        },
        {
            src: fstg3,
            alt: "Image 3",
        },
        {
            src: fstg4,
            alt: "Image 4",
        },
        {
            src: este,
            alt: "Image 5",
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

                                <img alt="logo" src={item.src} height="100" width="150" className="p-mr-2" />
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
                    ⏮️
                </button>
                <button className="next-btn" onClick={handleNextClick}>
                    ⏭️
                </button>
            </div>
        </>
    );
}

export default Certifications;