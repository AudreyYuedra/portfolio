import { NavLink } from "react-router-dom"

import Logo_GitHub from "../assets/github.svg"
import Logo_LinkedIn from "../assets/linkedin.svg"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const StickyHeader = styled.header`
   width: 100%;
   height: 50px;
   background-color: ${colors.bg_primary};
   ${mixins.rowSpaceBetween};
   align-items: center;
   position: sticky;
`
const SlyledLink = styled(NavLink)`
   padding: 5px;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.subtitle};
   color: ${colors.txt_primary};
   &:hover {
      cursor: pointer;
   }
`

export default function Header() {
   return (
      <StickyHeader>
         <p>HEADER !!!</p>
         <nav>
            <SlyledLink href="/">Accueil</SlyledLink>
            <SlyledLink href="/About">À Propos</SlyledLink>
            <SlyledLink href="/Projects">Projets</SlyledLink>
            <SlyledLink href="/Techno">Technologies</SlyledLink>
            <SlyledLink href="/Contact">Contact</SlyledLink>
         </nav>
         <nav>
            <img src={Logo_GitHub} alt="logo de GitHub" />
            <img src={Logo_LinkedIn} alt="logo de LinkedIn" />
         </nav>
      </StickyHeader>
   )
}
