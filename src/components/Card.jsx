import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const CardProject = styled.article`
   width: 35%;
   heigth: 400px;
   background-image: ${ProjetData.cover};
   border-radius: 25px;
   position: relative;
   &:hover {
      box-shadow: 0 0 20px ${colors.txt_primary};
   }
`
const Container = styled.div`
   width: 100%;
   heigth: 55px
   background-color: ${colors.bg_secondary};
   opacity: 0.7;
   color: ${colors.bg_tertiary};
   padding: 10px;
   ${mixins.column};
   postion: absolute;
   align-self: end;
   border-radius-bottom-left: 25px;
   border-radius-bottom-right: 25px;
    & h3 {
        font-family: ${fontFamily.ff_secondary};
        font-size: ${fontSize.subtitle};
    }
`
const BoxLinks = styled.div`
   ${mixins.rowSpaceBetween};
   margin-top: 5px;
   padding: 0 10px 0 10px;
   & i {
      width: 25px;
      heigth: 25px;
      &:hover {
         cursor: pointer;
      }
   }
   & div {
      ${mixins.rowCenter};
      & img {
         padding: 0 5px 0 5px;
         &:hover {
            cursor: pointer;
         }
      }
   }
`

export default function Card({ title, modale, github, web }) {
   return (
      <CardProject>
         <Container>
            <h3>{title}</h3>
            <BoxLinks>
               <i className="" onClick={modale}></i>
               <div>
                  <img src={github} alt="lien GitHub du projet" />
                  <img src={web} alt="lien du site du projet" />
               </div>
            </BoxLinks>
         </Container>
      </CardProject>
   )
}
