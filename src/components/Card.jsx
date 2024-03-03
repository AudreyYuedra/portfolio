import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const CardProject = styled.article`
   border: solid 2px red;
   width: 25%;
   heigth: 400px;
   background-image: ${ProjetData.cover};
   border-radius: 25px;
   position: relative;
   margin: 10px;
   &:hover {
      box-shadow: 0 0 20px ${colors.txt_primary};
   }
`
const Container = styled.div`
   heigth: 55px;
   background-color: pink;
   opacity: 0.7;
   padding: 10px;
   ${mixins.column};
   postion: absolute;
   align-self: end;
   z-index: 2;
   border-bottom-left-radius: 25px;
   border-bottom-right-radius: 25px;
   & h3 {
      font-family: ${fontFamily.ff_secondary};
      font-size: ${fontSize.subtitle};
      display: flex;
      justify-content: center;
      opacity: 1;
   }
`
const BoxLinks = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 5px;
   padding: 0 15px;
   opacity: 1;
   & i {
      padding: 0 3px;
      font-size: 14px;
      &:hover {
         cursor: pointer;
      }
   }
`

export default function Card({ title, onClick, github, web }) {
   return (
      <CardProject>
         <Container>
            <h3>{title}</h3>
            <BoxLinks>
               <i className="fa-solid fa-circle-plus" alt="ouverture de la modale" onClick={onClick}></i>
               {/*<Link to={github}>*/}
               <i className="fa-brands fa-github" alt="lien GitHub du projet"></i>
               {/*</Link>*/}
               {/*<Link to{web}>*/}
               <i className="fa-solid fa-link" alt="lien du site du projet"></i>
               {/*</Link>*/}
            </BoxLinks>
         </Container>
      </CardProject>
   )
}
