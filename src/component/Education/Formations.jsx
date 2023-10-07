import React from 'react';
import styled from "styled-components";
import Card from "../Card/FormCard.jsx";
import { Slide } from "react-awesome-reveal";
import este from "../../image/este.png";
import emsi from "../../image/logo-emsi.png";
import fstg from "../../image/fst.png";

export default function Formations() {
    //style={{ marginTop: 10}}
    return (
        <Container>
            <Slide direction="down">
                <h4>
                    Formations
                </h4>

            </Slide>
            <Slide>
                <Card
                    Icon={emsi}
                    title={"Ingénieur en Informatique et Réseaux (5ème année en cours)"}
                    subtitle={`École Marocaine des Sciences de l'Ingénieur`}
                    disc={`10/2022 – present`}
                />
            </Slide>

            <Slide direction="right" >
                <Card
                    Icon={este}
                    title={"Licence Professionnelle (ISIL)"}
                    subtitle={`École Supérieure de Technologie Essaouira`}
                    disc={`10/2021 – 07/2022`}
                />
            </Slide>
            <Slide >
                <Card
                    Icon={este}
                    title={"Diplôme Universitaire de Technologie (DUT) Génie Informatique"}
                    subtitle={`École Supérieure de Technologie Essaouira`}
                    disc={`09/2019 – 06/2021`}
                />
            </Slide>
            <Slide direction="right" >
                <Card
                    Icon={fstg}
                    title={"Tronc Commun (MIPC)"}
                    subtitle={`Faculté des Sciences et Techniques Marrakech`}
                    disc={`10/2018 – 06/2019`}
                />
            </Slide>

        </Container>
    )
}


const Container = styled.div`
  width: 80%;
  max-width: 880px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
