// import { NavLink } from "react-router-dom"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const StickyHeader = styled.header`
   width: 100%;
   height: 60px;
   background-color: ${colors.bg_tertiary};
   ${mixins.rowSpaceBetween};
   align-items: center;
   position: sticky;
   padding: 0 10px 0 10px;
`
/* const SlyledLink = styled(NavLink)`
   padding: 5px;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.subtitle};
   color: ${colors.txt_primary};
   &:hover {
      cursor: pointer;
   }
` */
const Icon = styled.i`
   font-size: 24px;
   color: ${colors.txt_primary};
   padding: 0 3px 0 3px;
`

export default function Header() {
   return (
      <StickyHeader>
         <p>HEADER !!!</p>
         <nav>
            blabla
            {/* <SlyledLink href="/">Accueil</SlyledLink>
            <SlyledLink href="/About">À Propos</SlyledLink>
            <SlyledLink href="/Projects">Projets</SlyledLink>
            <SlyledLink href="/Techno">Technologies</SlyledLink>
            <SlyledLink href="/Contact">Contact</SlyledLink> */}
         </nav>
         <nav>
            <Icon className="fa-brands fa-github" alt="logo de GitHub"></Icon>
            <Icon className="fa-brands fa-linkedin" alt="logo de LinkedIn"></Icon>
         </nav>
      </StickyHeader>
   )
}
