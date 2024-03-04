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
   const [selectedProject, setSelectedProject] = useState(null)

   const selectDataProject = (data) => {
      setSelectedProject(data)
      setIsOpen(true)
   }

   return (
      <Main>
         <Title>Mes projets</Title>
         <Gallery>
            {ProjetData.map((data) => (
               <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  github={data.links.github}
                  web={data.links.web}
                  onClick={() => {
                     selectDataProject(data)
                  }}
               />
            ))}
         </Gallery>
         {!isOpen ? (
            ""
         ) : (
            <Modal
               data={selectedProject}
               onClick={() => {
                  setIsOpen(false)
               }}
            />
         )}
      </Main>
   )
}
