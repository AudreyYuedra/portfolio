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
`
const Name = styled.div`
   height: 50px;
   margin-left: 20px;
   & p {
      font-family: ${fontFamily.Satisfy};
      font-size: ${fontSize.subtitle};
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
         font-size: 14px;
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
            <Icon className="fa-brands fa-github" alt="logo de GitHub"></Icon>
            <Icon className="fa-brands fa-linkedin" alt="logo de LinkedIn"></Icon>
         </NavIcons>
      </StickyHeader>
   )
}
