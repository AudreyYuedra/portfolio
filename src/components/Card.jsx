import { Link } from "react-router-dom"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const CardProject = styled.article`
   width: 25%;
   height: 300px;
   border-radius: 25px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: end;
   margin: 10px;
   &:hover {
      box-shadow: 0 0 20px ${colors.white};
   }
   @media (max-width: 1024px) {
      width: 40%;
      margin: 15px;
   }
   @media (max-width: 768px) {
      width: 80%;
   }
`
const Contain = styled.div`
   height: 55px;
   ${mixins.column};
   ${mixins.totalCenter};
   position: absolute;
   z-index: 3;
   padding-bottom: 10px;
   & h3 {
      font-family: ${fontFamily.Satisfy};
      font-size: ${fontSize.subtitle};
   }
`
const BoxLinks = styled.div`
   height: 25px;
   display: flex;
   justify-content: center;
   margin-top: 8px;

   & i {
      height: 18px;
      color: ${colors.black};
      padding: 0 4px;
      font-size: ${fontSize.subtitle};
      &:hover {
         cursor: pointer;
      }
   }
`
const StyledLink = styled(Link)`
   font-size: ${fontSize.subtitle};
`
const BGContainer = styled.div`
   width: 100%;
   height: 55px;
   background-color: ${colors.pastel_blue};
   opacity: 0.9;
   padding: 10px;
   z-index: 2;
   border-bottom-left-radius: 25px;
   border-bottom-right-radius: 25px;
`
const Img = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 25px;
   position: absolute;
   object-fit: cover;
`

export default function Card({ title, onClick, github, web, img, alt }) {
   return (
      <CardProject>
         <Contain>
            <h3>{title}</h3>
            <BoxLinks>
               <i className="fa-solid fa-circle-plus" alt="ouverture de la modale" onClick={onClick}></i>
               <StyledLink to={github}>
                  <i className="fa-brands fa-github" alt="lien GitHub du projet"></i>
               </StyledLink>
               <StyledLink to={web}>
                  <i className="fa-solid fa-link" alt="lien du site du projet"></i>
               </StyledLink>
            </BoxLinks>
         </Contain>

         <BGContainer />
         <Img src={img} alt={alt} />
      </CardProject>
   )
}
