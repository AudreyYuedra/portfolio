import Exp from "../components/Exp"
import ProjectData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 50px 0;
`
const Title = styled.h2`
   display: flex;
   justify-content: center;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.title};
   color: ${colors.bg_secondary};
   margin-bottom: 35px;
`
const ContainerCol = styled.div`
   ${mixins.rowSpaceBetween};
`
const Perso = styled.section`
   width: 48%;
   ${mixins.column};
   padding: 20px;
`
const Prez = styled.article`
   margin-bottom: 60px;
   & p {
      margin-bottom: 5px;
   }
   & span {
      margin-top: 5px;
      font-style: italic;
   }
`
const Scolaire = styled.article`
   & p {
      margin-bottom: 10px;
   }
   & span {
      font-size: ${fontSize.txt_about};
   }
`
const Pro = styled.section`
   width: 48%;
   ${mixins.column};
   padding: 20px;
`
const H3 = styled.h3`
   font-size: ${fontSize.subtitle};
   font-weigth: 700;
   margin-bottom: 10px;
   display: flex;
   justify-content: center;
`

export default function About() {
   return (
      <Main>
         <Title>À Propos</Title>
         <ContainerCol>
            <Perso>
               <Prez>
                  <p>Je suis située en région parisienne, plus précisément en Seine-et-marne.</p>
                  <p>
                     Passionnée par l'écriture depuis de nombreuses années, j'ai décidée d'utiliser mes compétences en création pour vous aider à construire vote site web personnel ou professionnel,
                     qui est le reflet de votre histoire et de votre personnalité.
                  </p>
                  <p>
                     Le travail en équipe est une notion importante pour moi, les challenges ne me font pas peur, et je suis toujours prête à apprendre de nouvelles technologies afin de répondre au
                     mieux à vos demandes.
                  </p>
                  <span>Je suis disponible immédiatement et motivée à collaborer avec vous !</span>
               </Prez>
               <Scolaire>
                  <H3>Scolaire</H3>
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
               </Scolaire>
            </Perso>

            <Pro>
               <H3>Expéricence</H3>
               {ProjectData.map((data) => (
                  <Exp content={data.resume} title={data.title} />
               ))}
            </Pro>
         </ContainerCol>
      </Main>
   )
}
