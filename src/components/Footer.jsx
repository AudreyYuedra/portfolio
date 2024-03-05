import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontSize } from "../styles/variables"
const MiniFooter = styled.footer`
   width: 100%;
   height: 25px;
   position: absolute;
   bottom: 0px;
   ${mixins.totalCenter};
   background-color: ${colors.light_black};
   border-top: solid 2px ${colors.dark_grey};
   & p {
      font-size: ${fontSize.mini_txt};
      color: ${colors.txt_primary};
   }
`

export default function Footer() {
   return (
      <MiniFooter>
         <p>Portfolio d'Audrey Luquet</p>
      </MiniFooter>
   )
}
