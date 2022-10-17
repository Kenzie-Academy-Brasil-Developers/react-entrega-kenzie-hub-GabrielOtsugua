import { createGlobalStyle } from "styled-components";

export const StyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoraion: none;
    outline: none;
  }

  body {
    background-color: var(--color-gray-4);
    color: var(--color-gray-0);
  }
`