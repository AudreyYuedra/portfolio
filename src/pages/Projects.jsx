import { useState } from "react"

import Card from "../components/Card"
import Modal from "../components/Modal"
import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { colors, fontFamily, fontSize } from "../styles/variables"
const Main = styled.main`
   margin: 50px 0;
   position: relative;
`
const Title = styled.h2`
   display: flex;
   justify-content: center;
   font-family: ${fontFamily.ff_secondary};
   font-size: ${fontSize.title};
   color: ${colors.bg_secondary};
   margin-bottom: 30px;
`
const Gallery = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 0 20px;
`

export default function Projects() {
   const [isOpen, setIsOpen] = useState(false) // modale fermée par défaut
   return (
      <Main>
         <Title>Mes projets</Title>
         <Gallery>
            {ProjetData.map((data) => (
               <Card
                  key={data.id}
                  title={data.title}
                  github={data.links.github}
                  web={data.links.web}
                  onClick={() => {
                     setIsOpen(true)
                  }}
               />
            ))}
         </Gallery>
         {!isOpen ? (
            ""
         ) : (
            <Modal
               key={ProjetData.id}
               onClick={() => {
                  setIsOpen(false)
               }}
            />
         )}
      </Main>
   )
}
