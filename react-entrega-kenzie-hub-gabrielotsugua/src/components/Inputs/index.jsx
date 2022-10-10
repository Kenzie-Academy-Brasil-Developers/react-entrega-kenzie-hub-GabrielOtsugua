import styled from "styled-components";

export const Input = styled.input`
  background-color: var(--color-gray-2);
  color: var(--color-gray-0);
  padding: 10px;
  border: 1px solid var(--color-gray-2);
  border-radius: 5px;
  &:focus {
    border: 1px solid var(--color-gray-1);
  }
`

export const Select = styled.select`
  background-color: var(--color-gray-2);
  color: var(--color-gray-0);
  padding: 10px;
  border: 1px solid var(--color-gray-2);
  border-radius: 5px;
  &:focus {
    border: 1px solid var(--color-gray-1);
  }
`