import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const ModalBox = styled.dialog`
   width: 50%;
   position: absolute;
   top: 10%;
   left: 25%;
   z-index: 3;
   border: none;
   border-radius: 25px;
   background-color: ${colors.light_black};
   ${mixins.column};
   padding: 15px 30px 40px 30px;
   &::backdrop {
      background-color: ${colors.white};
      opacity: 0.4;
      overflow: none;
   }
   @media (max-width: 1024px) {
      width: 70%;
      top: 10%;
      left: 10%;
      margin: 15px;
   }
   @media (max-width: 768px) {
      width: 60%;
      top: 4%;
      left: 13%;
   }
   & i {
      display: flex;
      justify-content: end;
      color: ${colors.light_blue};
      margin-bottom: 20px;
      &:hover {
         cursor: pointer;
      }
   }
`
const Img = styled.img`
   border: solid 2px red;
   width: 50%;
   height: 90px;
   display: flex;
   align-self: center;
   margin-bottom: 50px;
`
const Text = styled.p`
   margin-bottom: 8px;
   font-size: ${fontSize.subtitle};
   & span {
      color: ${colors.pastel_blue};
      font-weight: 700;
      font-family: ${fontFamily.Satisfy};
      margin-left: 15px;
   }
`

export default function Modal({ onClick, data }) {
   return (
      <ModalBox>
         <i className="fa-solid fa-xmark" onClick={onClick}></i>
         <Img src={data.image} alt={`bannière ${data.title}`} />
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
