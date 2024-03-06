// import { NavLink } from "react-router-dom"

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
const SlyledLink = styled.ul`
   display: flex;
   align-items: center;
   list-style-type: none;
   & li {
      padding: 0 5px;
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
   return (
      <StickyHeader>
         <Name>
            <p>Audrey</p>
            <P2>Luquet</P2>
         </Name>

         <SlyledLink>
            {/* <NavLink href="/">Accueil</NavLink>
            <NavLink href="/About">À Propos</NavLink>
            <NavLink href="/Projects">Projets</NavLink>
            <NavLink href="/Techno">Technologies</NavLink>
   <NavLink href="/Contact">Contact</NavLink> */}
         </SlyledLink>

         <NavIcons>
            <Icon className="fa-brands fa-github" alt="logo de GitHub"></Icon>
            <Icon className="fa-brands fa-linkedin" alt="logo de LinkedIn"></Icon>
         </NavIcons>
      </StickyHeader>
   )
}
