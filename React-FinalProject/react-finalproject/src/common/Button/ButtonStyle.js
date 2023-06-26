import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: ${({backgroundcolor}) => backgroundcolor};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 57px;
  border: 1.5px solid #003459;
`;
