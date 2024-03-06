import Exp from "../components/Exp"
import ProjectData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 70px 0;
   @media (max-width: 768px) {
      margin: 30px 0;
   }
   & h2 {
      ${mixins.titleH2};
      @media (max-width: 768px) {
         text-align: center;
         padding: 0 30px;
         margin-bottom: 20px;
      }
   }
`
const ContainerCol = styled.div`
   ${mixins.rowSpaceBetween};
   padding: 10px;
   margin-top: 30px;
   @media (max-width: 768px) {
      ${mixins.column};
   }
`
const Perso = styled.section`
   width: 48%;
   ${mixins.column};
   padding: 0 20px 20px 20px;
   border-right: dashed 1px ${colors.dark_grey};
   @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      border-right: none;
      border-bottom: dashed 1px ${colors.dark_grey};
   }
`
const Prez = styled.article`
   margin: 90px 20px;
   @media (max-width: 768px) {
      margin: 20px 30px;
      ${mixins.column};
      justify-content: center;
   }
   & p {
      margin-bottom: 10px;
   }
`
const Italic = styled.p`
   margin-left: 5px;
   font-style: italic;
`
const Scolaire = styled.article`
   margin: 0 0 20px 10px;
   @media (max-width: 768px) {
      margin: 20px 30px;
   }
   & p {
      margin-bottom: 15px;
   }
   & span {
      font-size: ${fontSize.subtitle};
      margin-left: 10px;
   }
`
const Langue = styled.article`
   margin-bottom: 20px;
   @media (max-width: 768px) {
      margin: 20px 30px;
   }
   & p {
      margin-bottom: 10px;
      & span {
         margin-left: 5px;
         font-style: italic;
      }
   }
`
/* const CV = styled.p`
   margin-top: 50px;
   & i {
      margin-left: 10px;
   }
` */
const Pro = styled.section`
   width: 48%;
   ${mixins.column};
   padding: 0 30px 30px 30px;
   border-left: dashed 1px ${colors.dark_grey};
   @media (max-width: 768px) {
      padding: 40px 0 0 0;
      margin: 0 15px 30px 0;
      width: 100%;
      border-left: none;
      border-top: dashed 1px ${colors.dark_grey};
   }
`
const H3 = styled.h3`
   display: flex;
   justify-content: center;
   font-size: ${fontSize.title_h3};
   font-weight: 700;
   color: ${colors.pastel_blue};
   margin-bottom: 20px;
`

export default function About() {
   return (
      <Main>
         <h2>À Propos de moi</h2>

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
                  <Italic>Je suis disponible immédiatement et motivée à collaborer avec vous !</Italic>
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

               <Langue>
                  <H3>Langues</H3>
                  <p>
                     Français : <span>langue maternelle</span>
                  </p>
                  <p>
                     Anglais : <span>novice</span>
                  </p>
                  <p>
                     Japonais : <span>débutante</span>
                  </p>
               </Langue>
               {/* <CV>
                  Mon CV à télécharger :<Link>
                  <i className="fa-solid fa-download"></i>
                  </Link>
               </CV> */}
            </Perso>

            <Pro>
               <H3>Expéricence</H3>
               {ProjectData.map((data) => (
                  <Exp key={data.id} content={data.resume} title={data.title} />
               ))}
            </Pro>
         </ContainerCol>
      </Main>
   )
}
