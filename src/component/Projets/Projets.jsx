

import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import CardProjet from "../Card/CardProjet.jsx";

const Projets = () => {

    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                PROJETS ACADEMIQUES
                </h4>
            </Slide>
            <Cards>
                <Slide>
                    <CardProjet
                        title={"Application Web de Gestion des Localisations des Pharmacies"}
                        annee={`2023`}
                        disc={` Spring Boot, ReactJS, MySQL`}
                        disc2={` Cette application permettra aux utilisateurs de rechercher et de localiser des pharmacies à proximité, de consulter leurs horaires d'ouverture et de fermeture, ainsi que d'autres informations pertinentes.`}
                        lien={'https://localpharmacie.vercel.app/'}
                    />
                </Slide>
                <Slide>
                    < CardProjet
                        title={"Application Web de Gestion Monétaire"}
                        annee={`2023`}
                        disc={` Spring Boot, ReactJS, MySQL`}
                        disc2={` Cette application offre une plateforme de gestion financière où les utilisateurs peuvent suivre leurs dépenses, gérer leur budget, et visualiser des rapports sur leurs transactions financières.`}
                        lien={'https://github.com/AnasJeg/Mini_banque_app'}
                    />
                </Slide>
                <Slide>
                

       < CardProjet
                        title={"Application Desktop de Gestion d'un Hôtel"}
                        annee={`2022`}
                        disc={` Java (avec Java Swing), MySQL`}
                        disc2={` Cette application de bureau permet à un hôtel de gérer ses réservations, d'assigner des chambres aux clients, de suivre les disponibilités.`}
                        lien={'https://github.com/AnasJeg/Gestion-Reservation-java'}
                    />
                </Slide>
                <Slide>
                    <CardProjet
                        title={"Application Web E-Learning"}
                        annee={`2023`}
                        disc={` Django, Postgres`}
                        disc2={` Cette plateforme d'apprentissage en ligne permet aux utilisateurs de suivre des cours, d'accéder à des ressources pédagogiques, de passer des évaluations, et de suivre leur progression dans différents domaines d'étude.`}
                        lien={'#'}
                    />
                </Slide>
              
               
               
                {/* <Slide>
                    <CardProjet
                        title={"Application web de Location de voitures"}
                        annee={`2023`}
                        disc={`Spring Boot - Typescript`}
                        lien={'#'}
                    />
                </Slide> */}
                <Slide>
                
             < CardProjet
                    title={"Application Desktop Smart House"}
                    annee={`2022`}
                    disc={` .NET avec C#, MySQL`}
                    disc2={` Cette application de maison intelligente permet aux utilisateurs de contrôler et de gérer divers dispositifs et systèmes de leur maison, tels que l'éclairage, la climatisation, la sécurité, etc., à partir de leur ordinateur de bureau.`}
                    lien={'https://github.com/AnasJeg/SmartHome'}
                />
            </Slide>

              
            <Slide>
                    < CardProjet
                        title={"Application mobile qui permet de parcourir une liste des Pokémon"}
                        annee={`2023`}
                        disc={` Android (java)`}
                        disc2={`Application mobile permettant d'explorer une liste de Pokémon avec des informations détaillées disponibles pour chaque Pokémon au toucher.`}
                        lien={'https://github.com/AnasJeg/Pokemon-AnasJ'}
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
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  grid-gap: 1rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

