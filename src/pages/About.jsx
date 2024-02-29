import Exp from "../components/Exp"
import ProjectData from "../utils/ProjectData.json"

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
            {ProjectData.map((data) => (
               <Exp cover={data.cover} title={data.title} />
            ))}
         </Pro>
      </Main>
   )
}
