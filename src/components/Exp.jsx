import styled from "styled-components"
import { colors, fontSize } from "../styles/variables"
const ExpPro = styled.article`
   padding: 5px 10px;
   margin-bottom: 15px;
   & h4 {
      text-decoration: underline ${colors.light_blue} 2px;
      margin-bottom: 5px;
   }
   & p {
      font-size: ${fontSize.subtitle};
   }
`

export default function Exp({ title, content }) {
   return (
      <ExpPro>
         <h4>{title}</h4>
         <p>{content}</p>
      </ExpPro>
   )
}
