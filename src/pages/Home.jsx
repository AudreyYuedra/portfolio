import Moi from "../assets/Photo_Profil.webp"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors } from "../styles/variables"
const Main = styled.main`
   margin: 70px 0;
   ${mixins.column};
   ${mixins.totalCenter};
   & h2 {
      ${mixins.titleH2};
   }
`
const Section = styled.section`
   width: 60%;
   ${mixins.row};
   margin-top: 80px;
`
const Img = styled.img`
   width: 230px;
   height: 330px;
   border-radius: 25px;
   box-shadow: 0 0 10px ${colors.white};
`
const Article = styled.article`
   ${mixins.column};
   justify-content: center;
   margin-left: 50px;
   & p {
      margin-bottom: 10px;
      & span {
         font-weight: 700;
         color: ${colors.pastel_blue};
      }
   }
`

export default function Home() {
   return (
      <Main>
         <h2>Bienvenue sur mon portfolio</h2>
         <Section>
            <Img src={Moi} />
            <Article>
               <p>
                  Je suis Audrey, <span>Intégratrice Web FrontEnd</span> et diplômée d'OpenClassrooms.
               </p>
               <p>
                  Ayant toujours été attirée par la <span>création</span> et les <span>technologies informatiques</span>, j'ai fusionné ces deux intérêts pour mettre mes compétences à votre service.
               </p>
            </Article>
         </Section>
      </Main>
   )
}
