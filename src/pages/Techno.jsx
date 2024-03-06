import TechnoData from "../utils/TechnoData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 70px 0;
   ${mixins.column};
`
const ContainCol = styled.section`
   ${mixins.column};
   margin-bottom: 50px;
   & h2 {
      ${mixins.titleH2};
   }
   & p {
      display: flex;
      justify-content: center;
   }
`
const ContainRow = styled.section`
   ${mixins.rowSpaceBetween};
   margin: 0 120px;
`
const SectionTech = styled.article`
   ${mixins.column};
   display: flex;
   align-items: center;
   & h3 {
      font-family: ${fontFamily.Satisfy};
      color: ${colors.pastel_blue};
      font-weight: 700;
      margin-bottom: 15px;
   }
   & ul {
      ${mixins.column};
      list-style-type: none;
      & li {
         display: flex;
         flex-direction: row;
         margin-bottom: 10px;
         border: solid 2px pink;
         & img {
            width: 50px;
            height: 50px;
            border: solid 2px yellow;
         }
         & p {
            display: flex;
            align-self: center;
            padding-left: 10px;
         }
      }
   }
`

export default function Techno() {
   return (
      <Main>
         <ContainCol>
            <h2>Technologies</h2>
            <p>
               Voici les langages, frameworks et outils que j'utilise pour réaliser mes projets.
               <br />
               Cette liste s'étend petit à petit au fil de mon apprentissage et de ma curiosité.
            </p>
         </ContainCol>
         <ContainRow>
            {/* Sections par catégories */}
            {TechnoData.map((index) => (
               <SectionTech>
                  <h3 key={index.id}>{index.category}</h3>
                  {/*liste techno */}
                  <ul>
                     {index.object.map((data) => (
                        <li key={data.id}>
                           <img src={data.logo} alt={`logo ${data.name}`} />
                           <p>{data.name}</p>
                        </li>
                     ))}
                  </ul>
               </SectionTech>
            ))}
         </ContainRow>
      </Main>
   )
}
