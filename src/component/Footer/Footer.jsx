import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../Footer/footer.css"
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";

export default function Footer() {

    return (
        <footer className="footer-dark" style={{ marginTop: "50px" }}>
            <div className="profiles">
                <div className="icons" style={{justifyContent: 'center'}}>
                    <Zoom>
                        <span>
                            <a href="/">
                                <AiFillGithub />
                            </a>
                        </span>
                    </Zoom>
                    <Zoom>
                        <span>
                            <a href="/">
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
                            <a href="/">
                                <RiInstagramFill />
                            </a>
                        </span>
                    </Zoom>
                </div>
            </div>
            <p className="copyright">jegoualanas©2023</p>
        </footer>
    );
}
