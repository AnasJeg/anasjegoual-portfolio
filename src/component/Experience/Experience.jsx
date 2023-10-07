import React from "react";
import styled from "styled-components";
import Card from "../Card/MyCard.jsx";
import { Slide } from "react-awesome-reveal";
import este from "../../image/este.png";
import Minnovation from "../../image/m-innovation.jpeg";
import innova from "../../image/innova.jpeg";

const Experience = () => {
    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                    Experiences
                </h4>

            </Slide>
            <Cards>
            <Slide>
                    <Card
                        Icon={innova}
                        title={"Stage d'observation,  Innova Smart Health"}
                        subtitle={`07/2023 – 11/2023 | Casablanca, Maroc`}
                        disc={`Conception et développement d'une application mobile en utilisant Flutter, Python, Spring Boot, gRPC, Minio, Keycloak, Firebase (FCM) et Redis. L'application est un composant essentiel du système web global "ClinOps".`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={innova}
                        title={"Stage de Fin d’études LP,  Innova Smart Health"}
                        subtitle={`04/2022 – 06/2022 | Casablanca, Maroc`}
                        disc={`Développement d'une web App de visualisation des reporting d'une application de santé en utilisant AngularJS, RxJS et Cubejs`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={Minnovation}
                        title={"Stage de Fin d’études DUT, M-innovation"}
                        subtitle={`04/2021 – 06/2021 | Marrakech, Maroc`}
                        disc={`Réalisation d’une Application Web pour Coran Karim en utilisant Laravel`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={este}
                        title={"Projet de Fin d’études DUT, École Supérieure de Technologie Essaouira"}
                        subtitle={`02/2021 – 04/2021 | Essaouira, Maroc`}
                        disc={`Conception et développement d'une application mobile dédiée au scan et à la gestion des codes QR/barres. L'application a été développée en utilisant la technologie Flutter, offrant une expérience utilisateur fluide et une interface conviviale pour la capture et la gestion de ces codes.`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={este}
                        title={"Stage d’initiation, École Supérieure de Technologie Essaouira"}
                        subtitle={`06/2020 – 07/2020 | Essaouira, Maroc`}
                        disc={`Réalisation d'une Application web pour l'école supérieure de technologie en utilisant Html, CSS et JavaScript`}
                    />
                </Slide>
              
              
             
              
            </Cards>
        </Container>
    );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
