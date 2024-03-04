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
   background-color: ${colors.txt_primary};
   ${mixins.column};
   padding: 15px 30px 40px 30px;
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
const Text = styled.p`
   color: ${colors.bg_tertiary};
   margin-bottom: 8px;
   & span {
      color: ${colors.bg_primary};
      font-size: ${fontSize.subtitle};
      font-weigth: 700;
      font-family: ${fontFamily.ff_secondary};
      margin-left: 15px;
   }
`

export default function Modal({ onClick, data }) {
   return (
      <ModalBox>
         <i className="fa-solid fa-xmark" onClick={onClick}></i>
         <Img src={data.image} />
         <Text>
            <span>Client : </span>
            {data.customer}
         </Text>
         <Text>
            <span>Présentation : </span>
            {data.presentation}
         </Text>
         <Text>
            <span>Objectifs : </span>
            {data.goal}
         </Text>
      </ModalBox>
   )
}
