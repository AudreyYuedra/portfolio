import { useForm, ValidationError } from "@formspree/react" // Formulaire formspree (pour ne pas avoir de backend)

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
`
const Accroche = styled.article`
   ${mixins.column};
   align-items: center;
   align-self: center;
   margin: 30px 0 70px 0;
   & .dbt {
      color: ${colors.pastel_blue};
      font-weight: 700;
   }
`
const Form = styled.form`
   width: 40%;
   ${mixins.column};
   & p {
      align-self: center;
      font-size: ${fontSize.mini_txt};
      margin-bottom: 10px;
   }
   & div {
      ${mixins.rowSpaceBetween};
   }
   & input {
      height: 30px;
      color: ${colors.pastel_blue};
      background-color: ${colors.light_black};
      font-size: ${fontSize.subtitle};
      border: none;
      margin-bottom: 10px;
   }
   & textarea {
      height: 200px;
      color: ${colors.pastel_blue};
      background-color: ${colors.light_black};
      font-size: ${fontSize.subtitle};
      border: none;
      margin-bottom: 20px;
   }
   & button {
      width: 20%;
      align-self: center;
      background-color: ${colors.light_blue};
      border: none;
      padding: 8px;
      border-radius: 15px;
   }
`
const InputRow = styled.input`
   width: 45%;
`

export default function Contact() {
   const [state, handleSubmit] = useForm("mvoeqoav")
   if (state.succeeded) {
      return <p>Votre message a bien été envoyé !</p>
   }

   return (
      <Main>
         <h2>Contactez-moi !</h2>
         <Accroche>
            <p className="dbt">Vous avez un projet ?</p>
            <p>N'hésitez pas à utiliser le formulaire pour me contacter.</p>
            <p>Je répondais rapidement et ensemble nous donnerons vie à votre projet.</p>
         </Accroche>

         <Form onSubmit={handleSubmit}>
            <p>Tous les champs doivent être remplis !</p>
            <div>
               <InputRow id="name" type="text" name="name" placeholder="  Votre nom" required />
               <InputRow id="email" type="email" name="email" placeholder="  Votre adresse mail" required />
               <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <input id="subject" type="subject" name="subject" placeholder="  Le sujet de votre message" required />
            <textarea id="message" name="message" placeholder="  Votre message" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
               Envoyez
            </button>
         </Form>
      </Main>
   )
}
