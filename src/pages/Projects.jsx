import Card from ""
import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { fontFamily, fontSize } from "../styles/variables"
const Title = styled.h2`
   width: 100%;
   align-self: center;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.title};
`

export default function Projects() {
   return (
      <main>
         <Title>Mes projets</Title>
         <section>
            {ProjetData.map((data) => (
               <Card title={data.title} github={data.links.github} web={data.links.web} />
            ))}
         </section>
      </main>
   )
}
