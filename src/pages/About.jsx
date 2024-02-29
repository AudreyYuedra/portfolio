import Exp from "../components/Exp"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   width: 100%;
   padding: 20px;
`
const Title = styled.h2`
   width: 100% ${mixins.rowCenter};
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.title};
   color: ${colors.bg_secondary};
   margin-bottom: 20px;
`
const Perso = styled.section`
   ${mixins.column};
   & article {
      padding: 10px;
      margin-bottom: 15px;
      & h3 {
         font-size: ${fontSize.subtitle};
         text-decoration: bold;
         margin-bottom: 5px;
      }
      & p {
         margin-bottom: 10px;
      }
      & span {
         font-size: ${fontSize.txt_about};
      }
   }
`
const Prez = styled.p`
   padding: 10px;
   margin-bottom: 15px;
   & span {
      txt-decoration: italic;
   }
`
const Pro = styled.section`
   ${mixins.column};
   & h3 {
      font-size: ${fontSize.subtitle};
      text-decoration: bold;
      margin-bottom: 5px;
   }
`

export default function About() {
   return (
      <Main>
         <Title>À Propos</Title>

         <Perso>
            <Prez>
               Je suis située en région parisienne, plus précisément en Seine-et-marne.
               <br />
               Passionnée par l'écriture depuis de nombreuses années, j'ai décidée d'utiliser mes compétences en création pour vous aider à construire vote site web personnel ou professionnel, qui est
               le reflet de votre histoire et de votre personnalité.
               <br />
               Le travail en équipe est une notion importante pour moi, les challenges ne me font pas peur, et je suis toujours prête à apprendre de nouvelles technologies afin de répondre au mieux à
               vos demandes.
               <br />
               <span>Je suis disponible immédiatement et motivée à collaborer avec vous !</span>
            </Prez>
            <article>
               <h3>Scolaire</h3>
               <p>
                  Formation Intégrateur Web
                  <br />
                  <span>OpenClassrooms</span>
               </p>
               <p>
                  Niveau 1ère année LLCER Japonais
                  <br />
                  <span>Inalco</span>
               </p>
               <p>
                  DAEU A - option Littéraire
                  <br />
                  <span>Paris Diderot</span>
               </p>
            </article>
         </Perso>

         <Pro>
            <h3>Expéricence</h3>
            <Exp
               title="Argentbank"
               content="Conception d'une application bancaire basé sur React, et implémentation d'un système d'identification, d'un tableau de bord utilisateur et d'une gention de données via Redux."
            />

            <Exp
               title="724Events"
               content="Débogage d'un site web d'une agence d'événementiels, avec une analyse du code, l'identification et la résolution de sproblèmes, et la finalisation d'un cahier de recettes."
            />

            <Exp
               title="Nina Carducci"
               content="Amélioration de la performance global du site d'une photographe, avec le renforecment de son référencement sur les moteurs de recherches et l'optimisation de l'accessibilité."
            />

            <Exp
               title="Kasa"
               content="Intégration du FrontEnd en react d'une application de location immobilière, incluant des fiches de logements, un carrousel, et des animation de type collapse."
            />

            <Exp
               title="MenuMaker by Qwenta"
               content="Développement d'une application de création de menus avec l'élaboration de la solution technique, la documentation des spécifications techniques, le découpage des fonctionnalités en
                  tâches, et le suivi du projet via un outil de gestion."
            />

            <Exp
               title="ArchiWebos - Sophie Bluel"
               content="Création d'un site web portfolio d'une architecte, en Javascript avec un système de filtres de projets par catégorie, un système d'ajout et suppression de projets, et l'utilisation
                  d'une API pour générer dynamiquement des éléments du site."
            />

            <Exp title="OhMyFood" content="Mise en place du FrontEnd d'un site en mobile first pour une plateforme de restaurants, avec l'implémention d'animation en Sass." />

            <Exp title="Booki" content="Création de la page d'accueil d'une agence de voyage, en HTML et CSS, avec un design responsive." />
         </Pro>
      </Main>
   )
}
