import { Link, useLocation } from "react-router-dom"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const StickyHeader = styled.header`
   width: 100%;
   height: 60px;
   background-color: ${colors.light_black};
   ${mixins.rowSpaceBetween};
   align-items: center;
   position: sticky;
   box-shadow: 0 0 25px ${colors.dark_grey};
   @media (max-width: 470px) {
      height: 80px;
   }
`
const Name = styled.div`
   width: 60px;
   height: 50px;
   margin-left: 20px;
   @media (max-width: 768px) {
      width: 50px;
      height: 30px;
      margin-left: 10px;
   }
   & p {
      font-family: ${fontFamily.Satisfy};
      font-size: ${fontSize.subtitle};
      @media (max-width: 768px) {
         font-size: 14px;
      }
   }
`
const P2 = styled.p`
   position: relative;
   left: 10px;
   top: -8px;
`
const SlyledLink = styled.nav`
   display: flex;
   align-items: center;
   list-style-type: none;
   @media (max-width: 470px) {
      flex-wrap: wrap;
      justify-content: center;
   }
   & a {
      padding: 0 20px;
      font-family: ${fontFamily.Satisfy};
      color: ${colors.light_blue};
      text-decoration: none;
      &:hover {
         cursor: pointer;
         color: ${colors.pastel_blue};
         text-decoration: none;
      }
      @media (max-width: 1024px) {
         font-size: ${fontSize.subtitle};
      }
      @media (max-width: 768px) {
         padding: 0 8px;
         font-size: 16px;
      }
      @media (max-width: 470px) {
         margin: 5px 0;
      }
   }
   .current {
      color: ${colors.pastel_blue};
      text-decoration: none;
   }
`
const NavIcons = styled.nav`
   margin-right: 20px;
   &:hover {
      cursor: pointer;
   }
   @media (max-width: 768px) {
      margin-right: 10px;
   }
   @media (max-width: 470px) {
      width: 25px;
   }
`
const Icon = styled.i`
   font-size: 24px;
   color: ${colors.white};
   padding: 0 4px;
`

export default function Header() {
   const location = useLocation()

   return (
      <StickyHeader>
         <Name>
            <p>Audrey</p>
            <P2>Luquet</P2>
         </Name>

         <SlyledLink>
            <Link to="/" className={location.pathname === "/" ? "current" : ""}>
               Accueil
            </Link>
            <Link to="/About" className={location.pathname === "/About" ? "current" : ""}>
               À Propos
            </Link>
            <Link to="/Projects" className={location.pathname === "/Projects" ? "current" : ""}>
               Projets
            </Link>
            <Link to="/Techno" className={location.pathname === "/Techno" ? "current" : ""}>
               Technologies
            </Link>
            <Link to="/Contact" className={location.pathname === "/Contact" ? "current" : ""}>
               Contact
            </Link>
         </SlyledLink>

         <NavIcons>
            <Link to="https://github.com/AudreyYuedra" target="_blank">
               <Icon className="fa-brands fa-github" alt="logo de GitHub"></Icon>
            </Link>
            <Link to="https://www.linkedin.com/in/audrey-luquet-75113327b/" target="_blank">
               <Icon className="fa-brands fa-linkedin" alt="logo de LinkedIn"></Icon>
            </Link>
         </NavIcons>
      </StickyHeader>
   )
}
