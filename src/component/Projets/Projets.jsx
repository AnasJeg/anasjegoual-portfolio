import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import CardProjet from "../Card/CardProjet.jsx";

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
                    < CardProjet
                        title={"Création d'une application desktop de gestion d’un hotel"}
                        annee={`2022`}
                        disc={`java`}
                        lien={'https://github.com/AnasJeg/Gestion-Reservation-java'}
                    />
                </Slide>
                <Slide>
                    < CardProjet
                        title={"Création d'une application mobile qui permet de parcourir une liste des Pokémon"}
                        annee={`2023`}
                        disc={`Android (java)`}
                        lien={'https://github.com/AnasJeg/Pokemon-AnasJ'}
                    />
                </Slide>
                <Slide>
                    < CardProjet
                        title={"Création d'une application desktop smartHome"}
                        annee={`2022`}
                        disc={`c#`}
                        lien={'https://github.com/AnasJeg/SmartHome'}
                    />
                </Slide>
                <Slide>
                    <CardProjet
                        title={"Création d’un site web Localisation des pharmacies"}
                        annee={`2022-2023`}
                        disc={`Spring Boot - ReactJS`}
                        lien={'https://localpharmacie.vercel.app/'}
                    />
                </Slide>
                <Slide>
                    <CardProjet
                        title={"Création d’un site web Location de voitures"}
                        annee={`2022-2023`}
                        disc={`Spring Boot - Typescript`}
                        lien={'#'}
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 4rem;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;


