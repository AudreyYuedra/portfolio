import styled from "styled-components"
import { mixins } from "../styles/mixins"
import { colors, fontFamily, fontSize } from "../styles/variables"
const ModalBox = styled.dialog`
   width: 45%;
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
const Tags = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 15px 70px 0 70px;
   & p {
      min-width: 70px;
      text-align: center;
      font-size: ${fontSize.subtitle};
      fon-weight: 700;
      background-color: ${colors.light_blue};
      border-radius: 25px;
      padding: 10px;
      margin: 10px;
   }
`

export default function Modal({ onClick, data, src }) {
   return (
      <ModalBox id={data.id}>
         <i className="fa-solid fa-xmark" onClick={onClick}></i>
         <Img src={src} alt={`bannière ${data.title}`} />
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
         <Tags>
            {data.techno.map((index) => (
               <p>{index}</p>
            ))}
         </Tags>
      </ModalBox>
   )
}
