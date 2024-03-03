import Moi from "../assets/Moi3.jpg"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   ${mixins.totalCenter};
   margin: 13.86% 0;
   position: relative;
`
const Shape = styled.div`
   width: 800px;
   height: 480px;
   ${mixins.totalCenter};
   background-color: ${colors.bg_secondary};
   opacity: 0.6;
   border-radius: 65% 35% 42% 58% / 67% 40% 60% 33%;
   ${mixins.rowSpaceBetween};
   align-items: center;
   position: relative;
   rigth: -50%;
   top: 10%;
`
const Section = styled.section`
   display: flex;
   flex-direction: row;
   padding: 5px;
   width: 50%;
   position: absolute;
   z-index: 2;
   top: 65px;
`
const Img = styled.img`
   width: 250px;
   height: 350px;
   border: solid 2px red;
   border-radius: 25px;
`
const Article = styled.article`
   ${mixins.column};
   justify-content: center;
   color: ${colors.bg_tertiary};
   & h2 {
      display: flex;
      align-self: center;
      font-family: ${fontFamily.ff_secondary};
      font-size: ${fontSize.title};
      margin-bottom: 70px;
   }
   & p {
      font-size: ${fontSize.subtitle};
      margin-left: 35px;
      & span {
         font-weigth: 600;
      }
   }
`

export default function Home() {
   return (
      <Main>
         <Section>
            <Img src={Moi} />
            <Article>
               <h2>Bienvenue sur mon portfolio</h2>
               <p>
                  Je suis Audrey, <span>Intégratrice Web FrontEnd</span> et diplômée d'OpenClassrooms.
                  <br />
                  Ayant toujours été attirée par la <span>création</span> et les <span>technologies informatiques</span>, j'ai fusionné ces deux intérêts pour mettre mes compétences à votre service.
               </p>
            </Article>
         </Section>
         <Shape />
      </Main>
   )
}
