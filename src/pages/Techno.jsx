import TechnoData from "../utils/TechnoData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   display: flex;
   flex-direction: row;
   padding: 30px 60px;
   ${mixins.column};
`
const ContainCol = styled.section`
   ${mixins.column};
   margin-bottom: 70px;
   & p {
      display: flex;
      justify-content: center;
   }
`
const Title = styled.h2`
   display: flex;
   justify-content: center;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.title};
   color: ${colors.bg_secondary};
   margin-bottom: 30px;
`
const ContainRow = styled.section`
   ${mixins.rowSpaceBetween};
   margin: 0 25px 30px 25px;
`
const SectionTech = styled.article`
   ${mixins.column};
   display: flex;
   align-items: center;
   & ul {
      ${mixins.column};
      list-style-type: none;
      & li {
         margin-bottom: 10px;
         display: flex;
         flex-direction: row;
         & img {
            width: 50px;
            heigth: 50px;
         }
         & p {
            dispaly: flex;
            align-self: center;
            padding-left: 10px;
         }
      }
   }
`
const H3 = styled.h3`
   font-family: ${fontFamily.ff_secondary};
   margin-bottom: 15px;
`

export default function Techno() {
   return (
      <Main>
         <ContainCol>
            <Title>Technologies</Title>
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
                  <H3 key={index.id}>{index.category}</H3>
                  {/*liste techno */}
                  <ul>
                     {index.object.map((data) => (
                        <li key={data.id}>
                           <img src={data.logo} key={data.id} />
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
