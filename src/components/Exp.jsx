import styled from "styled-components"
const ExpPro = styled.article`
   padding: 10px;
   margin-bottom: 15px;
   & h4 {
      txt-decoration: bold;
      margin-bottom: 5px;
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
