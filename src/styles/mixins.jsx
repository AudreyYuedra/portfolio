import { css } from "styled-components"

export const mixins = {
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
}
