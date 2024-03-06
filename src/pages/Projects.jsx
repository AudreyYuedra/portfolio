import { useState } from "react"

import Card from "../components/Card"
import Modal from "../components/Modal"
import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { colors, fontFamily, fontSize } from "../styles/variables"
import { mixins } from "../styles/mixins"
const Main = styled.main`
   margin: 70px 0;
   @media (max-width: 768px) {
      margin: 30px 0;
   }
   & h2 {
      ${mixins.titleH2};
      @media (max-width: 768px) {
         text-align: center;
         padding: 0 30px;
         margin-bottom: 20px;
      }
   }
`
const Gallery = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 20px;
`

export default function Projects() {
   const [isOpen, setIsOpen] = useState(false) // modale fermée par défaut
   const [selectedProject, setSelectedProject] = useState(null)

   const selectDataProject = (data) => {
      setSelectedProject(data)
      setIsOpen(true)
   }

   const imageCoverPath = ProjetData.cover // chemin de l'image local
   const imagePath = ProjetData.image
   const imageURL = process.env.PUBLIC_URL + imagePath // construit l'URL complète de l'image
   const imageCoverURL = process.env.PUBLIC_URL + imageCoverPath

   return (
      <Main>
         <h2>Mes projets</h2>
         <Gallery>
            {ProjetData.map((data) => (
               <Card
                  key={data.id}
                  id={data.id}
                  img={imageCoverURL}
                  alt={`projet ${data.title}`}
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
               src={imageURL}
               onClick={() => {
                  setIsOpen(false)
               }}
            />
         )}
      </Main>
   )
}
