import styled from "styled-components";

export const PinkButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-gray-0);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    filter: saturate(130%);
  }
`

export const NegativePinkButton = styled.button`
  background-color: var(--color-primary-negative);
  color: var(--color-gray-0);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    filter: saturate(140%);
  }
`

export const GrayButton = styled.button`
  background-color: var(--color-gray-1);
  color: var(--color-gray-0);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export const BlackButton = styled.button`
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`