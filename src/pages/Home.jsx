import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   ${mixins.totalCenter};
`
const Shape = styled.div`
   width: 800px;
   height: 520px;
   background-color: ${colors.bg_secondary};
   opacity: 0.5;
   border-radius: 56% 44% 33% 67%;
   ${mixins.rowSpaceBetween};
   align-items: center;
`
const Img = styled.img`
   width: 120px;
   height: 480px;
   border: solid 2px pink;
`
const Section = styled.section`
   width: auto;
   ${mixins.column};
   color: ${colors.bg_tertiary};
   & h2 {
      font-family: ${fontFamily.ff_secondary};
      font-size: ${fontSize.title};
      margin-bottom: 15px;
   }
   & p {
      font-size: ${fontSize.subtitle};
      & span {
         text-decoration: bold;
      }
   }
`

export default function Home() {
   return (
      <Main>
         <Shape>
            <Img>photo</Img>
            <Section>
               <h2>Bienvenue sur mon portfolio</h2>
               <p>
                  Je suis Audrey, <span>Intégratrice Web FrontEnd</span> et diplômée d'OpenClassrooms.
                  <br />
                  Ayant toujours été attirée par la <span>création</span> et les <span>technologies informatiques</span>, j'ai fusionné ces deux intérêts pour mettre mes compétences à votre service.
               </p>
            </Section>
            fond forme couleur
         </Shape>
      </Main>
   )
}
