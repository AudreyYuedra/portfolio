import ProjetData from "../utils/ProjectData.json"

import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const ModalBox = styled.dialog`
   width: 50%;
   heigth: 450px;
   position: absolute;
   top: 25%;
   left: 25%;
   z-index: 3;
   border: none;
   border-radius: 25px;
   background-color: ${colors.bg_secondary};
   ${mixins.column};
   padding: 15px;
   &::backdrop {
      background-color: rgba(255, 255, 255, 0.8);
   }
   & i {
      display: flex;
      justify-content: end;
      color: ${colors.bg_tertiary};
      margin-bottom: 20px;
      &:hover {
         cursor: pointer;
      }
   }
`
const Img = styled.img`
   border: solid 2px red;
   width: 50%;
   heigth: 90px;
   display: flex;
   align-self: center;
   margin-bottom: 20px;
`

export default function Modal({ onClick }) {
   return (
      <ModalBox>
         <i className="fa-solid fa-xmark" onClick={onClick}></i>
         <Img src={ProjetData.image} />
         <p>Client : {ProjetData.customer}</p>
         <p>Présentation : {ProjetData.presentation}</p>
         <p>Objectifs : {ProjetData.goal}</p>
      </ModalBox>
   )
}
