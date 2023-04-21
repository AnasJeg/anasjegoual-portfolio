import React from "react";
import styled from "styled-components";
import Card from "../Card/MyCard.jsx";
import { Slide } from "react-awesome-reveal";
import este from "../../image/este.png";
import Minnovation from "../../image/m-innovation.jpeg";
import innova from "../../image/innova.jpeg";

const Projets = () => {
    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                    Projets
                </h4>

            </Slide>
            <Cards>
                <Slide>
                    <Card
                        Icon={este}
                        title={"Stage d’initiation, ESTE"}
                        subtitle={`06/2020 – 07/2020 `}
                        disc={`Réalisation d'une Application web pour l'école supérieure de technologie`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={este}
                        title={"Projet de Fin d’études DUT, ESTE"}
                        subtitle={`02/2021 – 04/2021`}
                        disc={`Réalisation d’une Application Mobile pour Scan et la gestion des QR/Barre des produits`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={Minnovation}
                        title={"Stage de Fin d’études DUT, M-innovation"}
                        subtitle={`04/2021 – 06/2021 `}
                        disc={`Réalisation d’une Application Web pour Coran Karim`}
                    />
                </Slide>
                <Slide>
                    <Card
                        Icon={innova}
                        title={"Stage de Fin d’études LP,  Innova Smart Health"}
                        subtitle={`04/2022 – 06/2022`}
                        disc={`Développement d'une web App de visualisation des reporting d'une application de santé`}
                    />
                </Slide>
            </Cards>
        </Container>
    );
};

export default Projets;

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
