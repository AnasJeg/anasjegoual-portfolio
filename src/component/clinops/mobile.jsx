import React from 'react';
import QRCode from 'qrcode.react';
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Card } from "primereact/card";

const Mobile = ({ apkUrl }) => {

    const downloadLink = `${apkUrl}?download=true`;

    return (
        <Container id="home" className="container">
            <Slide direction="down">
                <Texts>
                    <h1 className="green">
                        <span className="green"> ClinOps</span> app
                    </h1>
                </Texts>
            </Slide>

            <div style={{ marginTop: 50 }}>
                <Card>
                    <QRCode value={downloadLink} />
                </Card>
            </div>
        </Container>
    );
};

export default Mobile;

const Container = styled.div`
  width: 20%;
  max-width: 880px;
  margin: 0 auto;
  padding: 6rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Texts = styled.div`
  flex: 1;
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
`;
