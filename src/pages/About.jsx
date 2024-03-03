import Exp from "../components/Exp"
import ProjectData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 50px 0;
   position: relative;
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
   position: relative;
   z-index: 2;
`
const Prez = styled.article`
   margin-top: 50px;
   margin-bottom: 70px;
`
const P1 = styled.p`
   width: 60%;
   position: relative;
   left: 195px;
   margin-bottom: 5px;
`
const P2 = styled.p`
   width: 90%;
   position: relative;
   left: 70px;
   margin-bottom: 5px;
`
const P3 = styled.p`
   width: 94%;
   position: relative;
   left: 20px;
   margin-bottom: 5px;
`
const P4 = styled.p`
   width: 94%;
   position: relative;
   left: 75px;
   margin-bottom: 5px;
   font-style: italic;
`
const Shape = styled.div`
   width: 48.5%;
   height: 300px;
   background-color: ${colors.bg_secondary};
   opacity: 0.6;
   border-radius: 65% 35% 42% 58% / 67% 40% 60% 33%;
   margin-left: 10px;
   position: absolute;
   top: 10%;
`
const Scolaire = styled.article`
   margin-bottom: 20px;
   & p {
      margin-bottom: 10px;
   }
   & span {
      font-size: ${fontSize.txt_about};
   }
`
const Langue = styled.article`
   margin-bottom: 20px;
   & p {
      margin-bottom: 10px;
   }
`
const CV = styled.p`
   margin-top: 50px;
   & i {
      margin-left: 10px;
   }
`
const Pro = styled.section`
   width: 48%;
   ${mixins.column};
   padding: 20px;
   position: relative;
   z-index: 2;
`
const H3 = styled.h3`
   font-size: ${fontSize.subtitle};
   font-weigth: 700;
   margin-bottom: 15px;
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
                  <P1>Je suis située en région parisienne, plus précisément en Seine-et-marne.</P1>
                  <P2>
                     Passionnée par l'écriture depuis de nombreuses années, j'ai décidée d'utiliser mes compétences en création pour vous aider à construire vote site web personnel ou professionnel,
                     qui est le reflet de votre histoire et de votre personnalité.
                  </P2>
                  <P3>
                     Le travail en équipe est une notion importante pour moi, les challenges ne me font pas peur, et je suis toujours prête à apprendre de nouvelles technologies afin de répondre au
                     mieux à vos demandes.
                  </P3>
                  <P4>Je suis disponible immédiatement et motivée à collaborer avec vous !</P4>
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
                  <p>Français : langue maternelle</p>
                  <p>Anglais : </p>
                  <p>Japonais :</p>
               </Langue>
               <CV>
                  Mon CV à télécharger :{/*<Link>*/}
                  <i className="fa-solid fa-download"></i>
                  {/*<Link>*/}
               </CV>
            </Perso>
            <Shape />

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
