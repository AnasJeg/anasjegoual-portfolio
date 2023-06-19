import React from "react";
import "../Footer/footer.css"
import { Zoom } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineSolution } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {

    return (
        <footer className="footer-dark" style={{ marginTop: "50px" }}>
            <div className="profiles">
                <div className="icons" style={{justifyContent: 'center'}}>
                    <Zoom>
                        <span>
                            <a href="https://github.com/AnasJeg">
                                <AiFillGithub />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="https://www.linkedin.com/in/anasjegoual/">
                                <AiFillLinkedin />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="/">
                                <BsFacebook />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="https://twitter.com/Alien__J">
                                <AiFillTwitterCircle />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="Anas_Jegoual_Resume.pdf" download>
                                <AiOutlineSolution />
                            </a>
                        </span>
                    </Zoom>
            
                </div>
            </div>
            <p className="copyright">jegoualanas©2023</p>
        </footer>
    );
}
