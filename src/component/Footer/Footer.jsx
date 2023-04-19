import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../Footer/footer.css"


export default function Footer() {

    return (
            <footer  className="footer-dark" style={{ marginTop: "50px" }}>
                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">

                        <div className="col item social">
                            <a href="#"><RiTelegramFill /></a>
                            <a href="#"><RiFacebookCircleFill /></a>
                            <a href="#"><AiFillTwitterCircle /></a>
                            <a href="#"><RiInstagramFill /></a></div>
                    </div>

                    <p className="copyright">jegoualanas©2023</p>
                </div>
            </footer>
    );
}
