import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 70px 0;
   ${mixins.column};
   ${mixins.totalCenter};
   & h2 {
      ${mixins.titleH2};
   }
   span {
      color: ${colors.pastel_blue};
      font-weight: 700;
      margin-bottom: 20px;
   }
`

export default function Error() {
   return (
      <Main>
         <h2>OUPS !</h2>
         <span>Il semble y avoir eu une erreur.</span>
         <p>La page que vous recherchez n'existe pas !</p>
      </Main>
   )
}
