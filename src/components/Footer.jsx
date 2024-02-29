import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontSize } from "../styles/variables"
const MiniFooter = styled.footer`
   width: 100%;
   height: 25px;
   background-color: ${colors.bg_tertiary};
   ${mixins.totalCenter};
   font-size: ${fontSize.mini_txt};
   color: ${colors.txt_primary};
`

export default function Footer() {
   return (
      <MiniFooter>
         <p>Portfolio d'Audrey Luquet</p>
      </MiniFooter>
   )
}
