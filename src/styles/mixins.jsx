import { css } from "styled-components"
import { colors, fontFamily, fontSize } from "../styles/variables"

export const mixins = {
   row: () => css`
      display: flex;
      flex-direction: row;
   `,
   rowSpaceBetween: () => css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   `,
   totalCenter: () => css`
      display: flex;
      justify-content: center;
      align-items: center;
   `,
   column: () => css`
      display: flex;
      flex-direction: column;
   `,
   rowCenter: () => css`
      display: row;
      justify-content: center;
   `,
   titleH2: () => css`
      display: flex;
      justify-content: center;
      font-family: ${fontFamily.Satisfy};
      font-size: ${fontSize.title_h2};
      color: ${colors.light_blue};
      margin-bottom: 40px;
   `,
}
